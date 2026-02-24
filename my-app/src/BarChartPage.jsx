import Navbar from "./Navbar";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useLocation } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

function BarChartPage() {
  // Get employee data passed from List page
  const location = useLocation();
  const data = location.state || [];

  // Take top 10 employees
  const firstTen = data.slice(0, 10);

  // Prepare chart data
  const chartData = {
    labels: firstTen.map((item) => item[0]), 
    datasets: [
      {
        label: "Salary",
        data: firstTen.map((item) =>
          parseInt(item[5].replace(/[$,]/g, ""))
        ),
        backgroundColor: [
          "#a5b4fc",
          "#c4b5fd",
          "#f9a8d4",
          "#fca5a5",
          "#fdba74",
          "#fde68a",
          "#86efac",
          "#99f6e4",
          "#93c5fd",
          "#5eead4",
        ],
        borderRadius: 8,
        barThickness: 40,
      },
    ],
  };

  // Chart customization
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        ticks: {
          callback: function (value) {
            return "$" + value.toLocaleString();
          },
        },
      },
    },
  };

  return (
    <>
      <Navbar />
      <div className="chart-page">
        <div className="chart-card">
          <div className="chart-header">
            <h2 className="chart-title">Salary Analytics</h2>
            <p className="chart-subtitle">
              Top 10 Highest Paid Employees
            </p>
          </div>

          <div className="chart-wrapper">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </>
  );
}

export default BarChartPage;