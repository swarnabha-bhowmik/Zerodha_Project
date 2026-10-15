import {watchList} from '../data.js'
import { Chart } from './Chart.jsx'
import StockItems from "./StocksItems.jsx"

const StockSection = () => {
    const labels = watchList.map((stock) => stock.name);
    const data = {
        labels,
        datasets: [
            {
                label: "Price",
                data: watchList.map((stock) => stock.price),
                backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 206, 86, 0.6)",
                    "rgba(75, 192, 192, 0.6)",
                    "rgba(153, 102, 255, 0.6)",
                    "rgba(255, 159, 64, 0.6)",
                    "rgba(46, 204, 113, 0.6)",
                    "rgba(52, 152, 219, 0.6)",
                    "rgba(155, 89, 182, 0.6)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(46, 204, 113, 1)",
                    "rgba(52, 152, 219, 1)",
                    "rgba(155, 89, 182, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <div className="input-group mt-4" style={{ height: "40px", width: "94%" }}>
                <span className="input-group-text bg-white border-end-0">
                    <i className="fa-solid fa-magnifying-glass" style={{ color: "rgb(68, 68, 68)", fontSize: "12px" }} aria-hidden="true"></i>
                </span>
                <input
                    type="search"
                    className="form-control border-start-0 support-search-input me-4"
                    placeholder="Search eg: infy base, nifty fut, index, fund, etc"
                    aria-label="Search for help"
                    style={{ fontSize: "12px", color: "rgb(68, 68, 68)" }}
                />
            </div>
            <ul className="list-unstyled watchlist-list mt-3">
                {watchList.map((stock, index) => (
                    <StockItems stock={stock} index={index} key={index} />
                ))}
            </ul>
            <div className="mt-4 pt-3 border-top pb-4" style={{ width: "94%" }}>
                <Chart data={data} />
            </div>
        </div>
    )
}

export default StockSection