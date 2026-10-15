import {useState, useEffect} from "react"
import axios from "axios"
import StockSection from "../components/StockSection.jsx"
import { API_BASE_URL } from "../config"

const Positions = () => {
    const [allPositions, setallPositions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios.get(`${API_BASE_URL}/allPositions`)
            .then((res) => {
                setallPositions(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="text-center mt-5">Loading positions from database...</p>;
    if (error) return <p className="text-center text-danger mt-5">Error: {error}</p>;

    return (
        <section style={{ backgroundColor: "#f8f8f8"}}>
            <div className = "container-fluid" style = {{maxWidth: "94%", backgroundColor: "#fff"}}>
                <div className = "row">
                    <div className = "col-4 border-end">
                        <StockSection />
                    </div>
                    <div className = "col-8">
                        <p className = "mt-4 pt-2" style = {{fontSize: "16px", color: "rgb(68, 68, 68)"}}>
                            Positions ({allPositions.length})
                        </p>
                        <div className = "order-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th style={{ textAlign: "left" }}>Instrument</th>
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
                                    {allPositions.map((stock, index) => {
                                        const currValue = stock.price * stock.qty;
                                        const profit = currValue - stock.avg * stock.qty;
                                        const profClass = profit >= 0.0 ? "profit" : "loss";
                                        const dayClass = stock.isLoss ? "loss" : "profit";

                                        return (
                                            <tr key = {index} className = "item">
                                                <td>{stock.product}</td>
                                                <td style={{ textAlign: "left" }}>{stock.name}</td>
                                                <td>{stock.qty}</td>
                                                <td>{stock.avg.toFixed(2)}</td>
                                                <td>{stock.price.toFixed(2)}</td>
                                                <td>{currValue.toFixed(2)}</td>
                                                <td className = {profClass}>
                                                    {profit >= 0.0 ? `+${profit.toFixed(2)}` : profit.toFixed(2)}
                                                </td>
                                                <td className = {profClass}>{stock.net}</td>
                                                <td className = {dayClass}>{stock.day}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Positions