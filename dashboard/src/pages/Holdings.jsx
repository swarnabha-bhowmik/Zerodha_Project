import { useState, useEffect } from "react"
import axios from "axios"
import StockSection from "../components/StockSection.jsx"
import { Graph } from "../components/Graph.jsx"
import { holdings } from "../data.js"

const Holdings = () => {
    const [allHoldings, setallHoldings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:8080/allHoldings")
            .then((res) => {
                if (Array.isArray(res.data) && res.data.length > 0) {
                    setallHoldings(res.data);
                } else {
                    setallHoldings(holdings);
                }
                setLoading(false);
            })
            .catch(() => {
                // Fallback to static holdings from data.js if backend is not reachable
                setallHoldings(holdings);
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="text-center mt-5 text-muted">Loading holdings data...</p>;

    const labels = allHoldings.map((stock) => stock.name);
    const data = {
        labels,
        datasets: [
            {
                label: "Stock Price (LTP)",
                data: allHoldings.map((stock) => stock.price),
                backgroundColor: "rgba(56, 126, 209, 0.6)",
                borderColor: "rgb(56, 126, 209)",
                borderWidth: 1,
                borderRadius: 4,
            },
        ],
    };

    return (
        <section style={{ backgroundColor: "#f8f8f8" }}>
            <div className="container-fluid" style={{ maxWidth: "94%", backgroundColor: "#fff" }}>
                <div className="row">
                    <div className="col-4 border-end">
                        <StockSection />
                    </div>
                    <div className="col-8 ps-4 pe-4 pb-5">
                        <p className="mt-4 pt-2" style={{ fontSize: "16px", color: "rgb(68, 68, 68)" }}>
                            Holdings ({allHoldings.length})
                        </p>
                        <div className="order-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Instrument</th>
                                        <th>Qty</th>
                                        <th>Avg cost</th>
                                        <th>LTP</th>
                                        <th>Curr val</th>
                                        <th>P&L</th>
                                        <th>Net chg</th>
                                        <th>Day chg</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allHoldings.map((stock, index) => {
                                        const currValue = stock.price * stock.qty;
                                        const profit = currValue - stock.avg * stock.qty;
                                        const profClass = profit >= 0.0 ? "profit" : "loss";
                                        const dayClass = stock.isLoss ? "loss" : "profit";

                                        return (
                                            <tr key={index} className="item">
                                                <td>{stock.name}</td>
                                                <td>{stock.qty}</td>
                                                <td>{stock.avg ? stock.avg.toFixed(2) : "0.00"}</td>
                                                <td>{stock.price ? stock.price.toFixed(2) : "0.00"}</td>
                                                <td>{currValue.toFixed(2)}</td>
                                                <td className={profClass}>
                                                    {profit >= 0.0 ? `+${profit.toFixed(2)}` : profit.toFixed(2)}
                                                </td>
                                                <td className={profClass}>{stock.net}</td>
                                                <td className={dayClass}>{stock.day}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>

                        {/* Holdings Graph Section */}
                        <div className="mt-5 pt-4 border-top">
                            <Graph data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Holdings