import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import StockSection from "../components/StockSection";
import { Chart } from "../components/Chart";
import { holdings as initialHoldings, positions as initialPositions } from "../data.js";
import { API_BASE_URL, FRONTEND_URL } from "../config";

const Dashboard = () => {
    const [userName, setUserName] = useState(() => localStorage.getItem("userName") || "");
    const [clientId, setClientId] = useState(() => localStorage.getItem("clientId") || "DEMO");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [funds, setFunds] = useState(() => {
        const stored = localStorage.getItem("userFunds");
        return stored ? Number(stored) : 4043.10;
    });

    const [allHoldings, setAllHoldings] = useState(initialHoldings);
    const [allPositions, setAllPositions] = useState(initialPositions);
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        // Verify user session & details
        axios.post(`${API_BASE_URL}/verify`, {}, { withCredentials: true })
            .then((res) => {
                if (res.data && res.data.status) {
                    setIsLoggedIn(true);
                    if (res.data.fullName || res.data.user) {
                        setUserName(res.data.fullName || res.data.user);
                    }
                    if (res.data.clientId) {
                        setClientId(res.data.clientId);
                    }
                    if (res.data.funds) {
                        const avail = typeof res.data.funds === "object" ? res.data.funds.availableCash : res.data.funds;
                        if (avail !== undefined && avail !== null) {
                            setFunds(Number(avail));
                        }
                    }
                } else {
                    setIsLoggedIn(false);
                    setUserName("");
                    setClientId("DEMO");
                }
            })
            .catch(() => {
                setIsLoggedIn(false);
                setUserName("");
                setClientId("DEMO");
            });

        // Fetch holdings from database or fallback to static
        axios.get(`${API_BASE_URL}/allHoldings`)
            .then((res) => {
                if (Array.isArray(res.data) && res.data.length > 0) {
                    setAllHoldings(res.data);
                }
            })
            .catch(() => {
                setAllHoldings(initialHoldings);
            });

        // Fetch positions from database or fallback to static
        axios.get(`${API_BASE_URL}/allPositions`)
            .then((res) => {
                if (Array.isArray(res.data) && res.data.length > 0) {
                    setAllPositions(res.data);
                }
            })
            .catch(() => {
                setAllPositions(initialPositions);
            });

        // Fetch recent orders
        const fetchOrders = () => {
            axios.get(`${API_BASE_URL}/allOrders`)
                .then((res) => {
                    if (Array.isArray(res.data)) {
                        setAllOrders(res.data);
                    }
                })
                .catch(() => {
                    setAllOrders([]);
                });
        };

        fetchOrders();

        const handleOrderPlaced = () => {
            fetchOrders();
        };

        window.addEventListener("orderPlaced", handleOrderPlaced);
        return () => window.removeEventListener("orderPlaced", handleOrderPlaced);
    }, []);

    // Portfolio metrics
    const totalInvestment = allHoldings.reduce((acc, stock) => acc + ((stock.avg || 0) * (stock.qty || 0)), 0);
    const currentValue = allHoldings.reduce((acc, stock) => acc + ((stock.price || 0) * (stock.qty || 0)), 0);
    const totalPnL = currentValue - totalInvestment;
    const pnlPercentage = totalInvestment > 0 ? (totalPnL / totalInvestment) * 100 : 0;
    const isOverallProfit = totalPnL >= 0;

    // Top 5 holdings for Doughnut chart
    const topHoldings = [...allHoldings]
        .sort((a, b) => ((b.price || 0) * (b.qty || 0)) - ((a.price || 0) * (a.qty || 0)))
        .slice(0, 5);

    const chartData = {
        labels: topHoldings.map((h) => h.name),
        datasets: [
            {
                label: "Value (₹)",
                data: topHoldings.map((h) => Math.round((h.price || 0) * (h.qty || 0))),
                backgroundColor: [
                    "rgba(65, 132, 243, 0.75)",
                    "rgba(76, 175, 80, 0.75)",
                    "rgba(255, 152, 0, 0.75)",
                    "rgba(156, 39, 176, 0.75)",
                    "rgba(0, 188, 212, 0.75)",
                ],
                borderColor: [
                    "#4184f3",
                    "#4caf50",
                    "#ff9800",
                    "#9c27b0",
                    "#00bcd4",
                ],
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "right",
                labels: {
                    boxWidth: 10,
                    font: { size: 11 },
                    padding: 8,
                },
            },
            title: {
                display: false,
            },
        },
    };

    return (
        <section style={{ backgroundColor: "#f8f8f8", minHeight: "calc(100vh - 45px)" }}>
            <div className="container-fluid" style={{ maxWidth: "94%", backgroundColor: "#fff" }}>
                <div className="row">
                    {/* Watchlist Section on Left */}
                    <div className="col-4 border-end">
                        <StockSection />
                    </div>

                    {/* Main Dashboard Content on Right */}
                    <div className="col-8 ps-4 pe-4 pb-5">
                        {/* Welcome Header */}
                        <div className="d-flex align-items-center justify-content-between mt-4 pt-3 pb-3 border-bottom">
                            <div>
                                <h1 className="mb-1" style={{ fontSize: "24px", fontWeight: "600", color: "rgb(68, 68, 68)" }}>
                                    Hi, {isLoggedIn && userName ? userName : "Demo User"}
                                </h1>
                                <div className="d-flex align-items-center gap-2">
                                    <span className="badge bg-light text-dark border px-2 py-1" style={{ fontSize: "11px", fontWeight: "500" }}>
                                        Client: <strong className="text-primary">{isLoggedIn && clientId ? clientId : "DEMO"}</strong>
                                    </span>
                                    {isLoggedIn ? (
                                        <span className="badge bg-success-subtle text-success border border-success-subtle px-2 py-1" style={{ fontSize: "11px" }}>
                                            <i className="fa-solid fa-circle-check me-1"></i> Demat Active
                                        </span>
                                    ) : (
                                        <span className="badge bg-warning-subtle text-warning-emphasis border border-warning-subtle px-2 py-1" style={{ fontSize: "11px" }}>
                                            <i className="fa-solid fa-flask me-1"></i> Demo Mode
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Market Status Pulse */}
                            <div className="d-none d-md-flex align-items-center gap-3">
                                <div className="text-end">
                                    <p className="mb-0 text-muted" style={{ fontSize: "11px" }}>Market Status</p>
                                    <span className="badge bg-success-subtle text-success px-2 py-1" style={{ fontSize: "11px" }}>
                                        ● Open (NSE / BSE)
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Guest / Demo Mode Alert Banner */}
                        {!isLoggedIn && (
                            <div className="alert alert-warning d-flex align-items-center justify-content-between py-2 px-3 mt-3 mb-1 rounded-3 border-warning-subtle" role="alert">
                                <div className="d-flex align-items-center gap-2">
                                    <i className="fa-solid fa-circle-info text-warning"></i>
                                    <span className="small">You are currently in <strong>Demo Mode</strong>. Log in to access your personal account.</span>
                                </div>
                                <a
                                    href={`${FRONTEND_URL}/login`}
                                    className="btn btn-sm btn-dark px-3 py-1 text-decoration-none"
                                    style={{ fontSize: "12px" }}
                                >
                                    Log in
                                </a>
                            </div>
                        )}

                        {/* Market Pulse Ticker */}
                        <div className="row g-2 mt-3 mb-4">
                            <div className="col-6 col-md-3">
                                <div className="p-2 border rounded-2 bg-light d-flex justify-content-between align-items-center">
                                    <div>
                                        <div className="fw-semibold" style={{ fontSize: "12px", color: "#444" }}>NIFTY 50</div>
                                        <div style={{ fontSize: "13px", fontWeight: "600", color: "#444" }}>22,520.45</div>
                                    </div>
                                    <span className="loss small fw-semibold" style={{ fontSize: "11px" }}>-0.10%</span>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="p-2 border rounded-2 bg-light d-flex justify-content-between align-items-center">
                                    <div>
                                        <div className="fw-semibold" style={{ fontSize: "12px", color: "#444" }}>SENSEX</div>
                                        <div style={{ fontSize: "13px", fontWeight: "600", color: "#444" }}>72,226.85</div>
                                    </div>
                                    <span className="loss small fw-semibold" style={{ fontSize: "11px" }}>-0.33%</span>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="p-2 border rounded-2 bg-light d-flex justify-content-between align-items-center">
                                    <div>
                                        <div className="fw-semibold" style={{ fontSize: "12px", color: "#444" }}>NIFTY BANK</div>
                                        <div style={{ fontSize: "13px", fontWeight: "600", color: "#444" }}>47,835.80</div>
                                    </div>
                                    <span className="profit small fw-semibold" style={{ fontSize: "11px" }}>+0.42%</span>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="p-2 border rounded-2 bg-light d-flex justify-content-between align-items-center">
                                    <div>
                                        <div className="fw-semibold" style={{ fontSize: "12px", color: "#444" }}>NIFTY IT</div>
                                        <div style={{ fontSize: "13px", fontWeight: "600", color: "#444" }}>34,912.15</div>
                                    </div>
                                    <span className="profit small fw-semibold" style={{ fontSize: "11px" }}>+0.85%</span>
                                </div>
                            </div>
                        </div>

                        {/* Equity & Commodity Margins */}
                        <div className="row g-4 mb-4">
                            {/* Equity Card */}
                            <div className="col-12 col-md-6 pe-md-3">
                                <div className="p-3 border rounded-3 h-100 shadow-sm" style={{ backgroundColor: "#fafbfc" }}>
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div className="d-flex align-items-center gap-2">
                                            <i className="fa-solid fa-chart-pie text-primary" style={{ fontSize: "16px" }}></i>
                                            <h2 className="mb-0 fs-6 fw-semibold" style={{ color: "rgb(68, 68, 68)" }}>
                                                Equity
                                            </h2>
                                        </div>
                                        <Link to="/funds" className="text-decoration-none small text-primary fw-medium" style={{ fontSize: "12px" }}>
                                            Funds statement &rarr;
                                        </Link>
                                    </div>

                                    <div className="mb-3">
                                        <p className="text-muted small mb-0">Margin available</p>
                                        <h3 className="fw-bold mb-0" style={{ fontSize: "28px", color: "#4184f3" }}>
                                            ₹{funds.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                        </h3>
                                    </div>

                                    <div className="d-flex justify-content-between py-2 border-top border-bottom small text-muted mb-3">
                                        <div>
                                            <span>Margins used: </span>
                                            <strong className="text-dark">₹3,757.30</strong>
                                        </div>
                                        <div>
                                            <span>Opening balance: </span>
                                            <strong className="text-dark">₹{funds.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
                                        </div>
                                    </div>

                                    <div className="d-flex gap-2">
                                        <Link to="/funds" className="btn btn-sm btn-solid theme-success py-1 px-3">
                                            Add funds
                                        </Link>
                                        <Link to="/funds" className="btn btn-sm btn-solid theme-primary py-1 px-3">
                                            Withdraw
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Commodity Card */}
                            <div className="col-12 col-md-6 ps-md-3">
                                <div className="p-3 border rounded-3 h-100 shadow-sm" style={{ backgroundColor: "#fafbfc" }}>
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div className="d-flex align-items-center gap-2">
                                            <i className="fa-solid fa-droplet text-warning" style={{ fontSize: "16px" }}></i>
                                            <h2 className="mb-0 fs-6 fw-semibold" style={{ color: "rgb(68, 68, 68)" }}>
                                                Commodity
                                            </h2>
                                        </div>
                                        <span className="badge bg-secondary-subtle text-secondary" style={{ fontSize: "10px" }}>Inactive</span>
                                    </div>

                                    <div className="mb-3">
                                        <p className="text-muted small mb-0">Margin available</p>
                                        <h3 className="fw-bold mb-0 text-muted" style={{ fontSize: "28px" }}>
                                            ₹0.00
                                        </h3>
                                    </div>

                                    <div className="p-2 border rounded bg-white text-center mb-3">
                                        <p className="text-muted mb-2 small" style={{ fontSize: "12px" }}>
                                            You do not have active commodity trading privileges.
                                        </p>
                                        <Link to="/funds" className="btn btn-sm btn-outline-primary py-1 px-3" style={{ fontSize: "12px" }}>
                                            Activate Commodity
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Holdings & Portfolio Overview */}
                        <div className="card border rounded-3 shadow-sm mb-4">
                            <div className="card-body p-4">
                                <div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
                                    <div className="d-flex align-items-center gap-2">
                                        <i className="fa-solid fa-briefcase text-primary"></i>
                                        <h2 className="fs-6 fw-semibold mb-0" style={{ color: "rgb(68, 68, 68)" }}>
                                            Holdings ({allHoldings.length})
                                        </h2>
                                    </div>
                                    <Link to="/holdings" className="text-decoration-none small text-primary fw-medium" style={{ fontSize: "12px" }}>
                                        View all holdings &rarr;
                                    </Link>
                                </div>

                                {/* Summary Stats */}
                                <div className="row g-3 mb-4">
                                    <div className="col-12 col-md-4">
                                        <div className="p-3 border rounded-2 bg-light">
                                            <p className="text-muted small mb-1">Total Investment</p>
                                            <h4 className="fw-bold mb-0" style={{ fontSize: "18px", color: "#444" }}>
                                                ₹{totalInvestment.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <div className="p-3 border rounded-2 bg-light">
                                            <p className="text-muted small mb-1">Current Value</p>
                                            <h4 className="fw-bold mb-0" style={{ fontSize: "18px", color: "#444" }}>
                                                ₹{currentValue.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <div className="p-3 border rounded-2 bg-light">
                                            <p className="text-muted small mb-1">Total Profit / Loss</p>
                                            <h4 className={`fw-bold mb-0 ${isOverallProfit ? "profit" : "loss"}`} style={{ fontSize: "18px" }}>
                                                {isOverallProfit ? "+" : ""}₹{totalPnL.toFixed(2)} ({isOverallProfit ? "+" : ""}{pnlPercentage.toFixed(2)}%)
                                            </h4>
                                        </div>
                                    </div>
                                </div>

                                {/* Chart & Top Holdings Allocation */}
                                <div className="row align-items-center">
                                    <div className="col-12 col-lg-6">
                                        <div style={{ height: "230px" }}>
                                            <Chart data={chartData} options={chartOptions} />
                                        </div>
                                        <p className="text-center text-muted small mt-2 mb-0" style={{ fontSize: "11px" }}>
                                            Top 5 holdings by portfolio weight
                                        </p>
                                    </div>

                                    <div className="col-12 col-lg-6 mt-3 mt-lg-0">
                                        <div className="border rounded-2 p-2 bg-white">
                                            <p className="text-muted fw-semibold small px-2 py-1 mb-1 border-bottom" style={{ fontSize: "12px" }}>
                                                Top Holdings Snapshot
                                            </p>
                                            <div className="list-group list-group-flush">
                                                {topHoldings.slice(0, 4).map((stock, idx) => {
                                                    const stockVal = (stock.price || 0) * (stock.qty || 0);
                                                    const stockPnL = stockVal - ((stock.avg || 0) * (stock.qty || 0));
                                                    const isProfit = stockPnL >= 0;

                                                    return (
                                                        <div key={idx} className="list-group-item d-flex justify-content-between align-items-center py-2 px-2 border-bottom-0">
                                                            <div>
                                                                <span className="fw-bold small d-block" style={{ color: "#444" }}>{stock.name}</span>
                                                                <span className="text-muted" style={{ fontSize: "11px" }}>{stock.qty} Qty @ ₹{stock.avg?.toFixed(2)}</span>
                                                            </div>
                                                            <div className="text-end">
                                                                <span className="fw-semibold small d-block" style={{ color: "#444" }}>₹{stockVal.toFixed(2)}</span>
                                                                <span className={isProfit ? "profit" : "loss"} style={{ fontSize: "11px", fontWeight: "600" }}>
                                                                    {isProfit ? `+${stockPnL.toFixed(2)}` : stockPnL.toFixed(2)} ({stock.net})
                                                                </span>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Positions & Recent Orders Snapshots */}
                        <div className="row g-4 mb-4">
                            {/* Positions Snapshot */}
                            <div className="col-12 col-lg-6">
                                <div className="card border rounded-3 h-100 shadow-sm">
                                    <div className="card-body p-3">
                                        <div className="d-flex align-items-center justify-content-between mb-2 border-bottom pb-2">
                                            <div className="d-flex align-items-center gap-2">
                                                <i className="fa-solid fa-crosshairs text-primary"></i>
                                                <h2 className="fs-6 fw-semibold mb-0" style={{ color: "rgb(68, 68, 68)" }}>
                                                    Positions ({allPositions.length})
                                                </h2>
                                            </div>
                                            <Link to="/positions" className="text-decoration-none small text-primary" style={{ fontSize: "12px" }}>
                                                View all &rarr;
                                            </Link>
                                        </div>

                                        {allPositions.length === 0 ? (
                                            <p className="text-muted small text-center py-4 mb-0">
                                                No open positions today.
                                            </p>
                                        ) : (
                                            <div className="order-table mt-1">
                                                <table style={{ fontSize: "12px" }}>
                                                    <thead>
                                                        <tr>
                                                            <th>Product</th>
                                                            <th style={{ textAlign: "left" }}>Instrument</th>
                                                            <th>Qty</th>
                                                            <th>LTP</th>
                                                            <th>P&L</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {allPositions.map((pos, idx) => {
                                                            const pnl = ((pos.price || 0) - (pos.avg || 0)) * (pos.qty || 0);
                                                            const pnlClass = pnl >= 0 ? "profit" : "loss";
                                                            return (
                                                                <tr key={idx} className="item">
                                                                    <td>{pos.product}</td>
                                                                    <td style={{ textAlign: "left", fontWeight: "600" }}>{pos.name}</td>
                                                                    <td>{pos.qty}</td>
                                                                    <td>₹{pos.price?.toFixed(2)}</td>
                                                                    <td className={pnlClass} style={{ fontWeight: "600" }}>
                                                                        {pnl >= 0 ? `+${pnl.toFixed(2)}` : pnl.toFixed(2)}
                                                                    </td>
                                                                </tr>
                                                            );
                                                        })}
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Recent Orders Snapshot */}
                            <div className="col-12 col-lg-6">
                                <div className="card border rounded-3 h-100 shadow-sm">
                                    <div className="card-body p-3">
                                        <div className="d-flex align-items-center justify-content-between mb-2 border-bottom pb-2">
                                            <div className="d-flex align-items-center gap-2">
                                                <i className="fa-solid fa-clock-rotate-left text-primary"></i>
                                                <h2 className="fs-6 fw-semibold mb-0" style={{ color: "rgb(68, 68, 68)" }}>
                                                    Recent Orders ({allOrders.length})
                                                </h2>
                                            </div>
                                            <Link to="/orders" className="text-decoration-none small text-primary" style={{ fontSize: "12px" }}>
                                                View all &rarr;
                                            </Link>
                                        </div>

                                        {allOrders.length === 0 ? (
                                            <div className="text-center py-4">
                                                <i className="fa-regular fa-clipboard text-muted fs-3 mb-2"></i>
                                                <p className="text-muted small mb-1">No orders placed today.</p>
                                                <p className="text-muted" style={{ fontSize: "11px" }}>
                                                    Place an order by selecting Buy/Sell on any stock in your watchlist!
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="order-table mt-1">
                                                <table style={{ fontSize: "12px" }}>
                                                    <thead>
                                                        <tr>
                                                            <th style={{ textAlign: "left" }}>Instrument</th>
                                                            <th>Qty</th>
                                                            <th>Price</th>
                                                            <th>Type</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {allOrders.slice(-3).reverse().map((order, idx) => (
                                                            <tr key={order._id || idx} className="item">
                                                                <td style={{ textAlign: "left", fontWeight: "600" }}>{order.name}</td>
                                                                <td>{order.qty}</td>
                                                                <td>₹{Number(order.price).toFixed(2)}</td>
                                                                <td className={order.mode === "BUY" ? "profit" : "loss"} style={{ fontWeight: "700" }}>
                                                                    {order.mode}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Shortcuts & Resources */}
                        <div className="p-3 border rounded-3 bg-light">
                            <div className="row g-3 text-center">
                                <div className="col-md-4">
                                    <div className="p-2">
                                        <i className="fa-solid fa-bolt text-warning fs-5 mb-2"></i>
                                        <h3 className="fs-6 fw-semibold mb-1" style={{ color: "#444" }}>Instant Watchlist Order</h3>
                                        <p className="text-muted small mb-0">Hover over any stock on the left panel to place 1-click BUY or SELL orders.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="p-2 border-start border-end">
                                        <i className="fa-solid fa-shield-halved text-primary fs-5 mb-2"></i>
                                        <h3 className="fs-6 fw-semibold mb-1" style={{ color: "#444" }}>Demat Security</h3>
                                        <p className="text-muted small mb-0">Manage your 2FA PIN and account security settings in your Profile tab.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="p-2">
                                        <i className="fa-solid fa-circle-question text-success fs-5 mb-2"></i>
                                        <h3 className="fs-6 fw-semibold mb-1" style={{ color: "#444" }}>Zero Commission</h3>
                                        <p className="text-muted small mb-0">₹0 brokerage on Equity Delivery investments and direct mutual funds.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;