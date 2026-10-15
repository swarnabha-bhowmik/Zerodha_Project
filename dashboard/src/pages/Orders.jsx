import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import StockSection from "../components/StockSection";
import { API_BASE_URL } from "../config";

const Orders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchOrders = useCallback((isInitial = false) => {
        if (isInitial) setLoading(true);
        axios.get(`${API_BASE_URL}/allOrders`)
            .then((res) => {
                if (Array.isArray(res.data)) {
                    setAllOrders(res.data);
                }
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        fetchOrders(true);

        const handleOrderPlaced = () => {
            fetchOrders(false);
        };

        window.addEventListener("orderPlaced", handleOrderPlaced);
        return () => window.removeEventListener("orderPlaced", handleOrderPlaced);
    }, [fetchOrders]);

    if (loading) return <p className="text-center mt-5">Loading orders from database...</p>;
    if (error) return <p className="text-center text-danger mt-5">Error: {error}</p>;

    const displayOrders = [...allOrders].reverse();

    return (
        <section style={{ backgroundColor: "#f8f8f8" }}>
            <div className="container-fluid" style={{ maxWidth: "94%", backgroundColor: "#fff" }}>
                <div className="row">
                    <div className="col-4 border-end">
                        <StockSection />
                    </div>
                    <div className="col-8">
                        <p className="mt-4 pt-2" style={{ fontSize: "16px", color: "rgb(68, 68, 68)" }}>
                            Orders ({allOrders.length})
                        </p>
                        <div className="order-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Time</th>
                                        <th style={{ textAlign: "left" }}>Instrument</th>
                                        <th>Qty</th>
                                        <th>Price</th>
                                        <th>Mode</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allOrders.length === 0 ? (
                                        <tr>
                                            <td colSpan="5" className="text-center py-4 text-muted">
                                                No orders placed yet. Place an order from the watchlist!
                                            </td>
                                        </tr>
                                    ) : (
                                        displayOrders.map((order, index) => {
                                            const formattedTime = order.createdAt 
                                                ? new Date(order.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) 
                                                : "—";
                                            const modeClass = order.mode === "BUY" ? "profit" : "loss";

                                            return (
                                                <tr key={order._id || index} className="item">
                                                    <td>{formattedTime}</td>
                                                    <td style={{ textAlign: "left" }}>{order.name}</td>
                                                    <td>{order.qty}</td>
                                                    <td>₹{Number(order.price).toFixed(2)}</td>
                                                    <td className={modeClass} style={{ fontWeight: 600 }}>
                                                        {order.mode}
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Orders;