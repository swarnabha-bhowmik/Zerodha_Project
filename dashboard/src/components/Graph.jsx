import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    BarController,
    Title,
    Tooltip,
    Legend
} from "chart.js"
import { Bar } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, BarElement, BarController, Title, Tooltip, Legend);

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Holdings - Stock Prices (LTP)",
            font: {
                size: 14,
                weight: "bold",
            },
            color: "rgb(68, 68, 68)",
        },
    },
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                callback: (value) => "₹" + value,
            },
        },
    },
};

export function Graph({ data }) {
    if (!data || !data.datasets || data.datasets.length === 0) {
        return null;
    }
    return (
        <div style={{ height: "350px", width: "100%", position: "relative" }}>
            <Bar options={options} data={data} />
        </div>
    );
}