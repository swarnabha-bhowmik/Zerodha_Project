import {
    Chart as ChartJS,
    ArcElement,
    DoughnutController,
    Tooltip,
    Legend
} from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(ArcElement, DoughnutController, Tooltip, Legend);

const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: "bottom",
            labels: {
                boxWidth: 10,
                font: {
                    size: 11,
                },
                padding: 8,
            },
        },
        title: {
            display: true,
            text: "Watchlist Distribution",
            font: {
                size: 13,
                weight: "600",
            },
            color: "rgb(68, 68, 68)",
            padding: {
                bottom: 10,
            },
        },
    },
};

export function Chart({ data, options = defaultOptions }) {
    if (!data || !data.datasets || data.datasets.length === 0) {
        return null;
    }
    return (
        <div style={{ height: "260px", width: "100%", position: "relative" }}>
            <Doughnut data={data} options={options} />
        </div>
    );
}