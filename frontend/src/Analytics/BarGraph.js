import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarGraph({ d1, d2, unit }) {
  const labels = ["Engine", "Landing Gear", "Avionics", "Fuselage", "Wing"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "USED PARTS",
        data: d1,
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgb(255, 99, 132)"],
        borderWidth: 1,
      },
      {
        label: "NEW PARTS",
        data: d2,
        backgroundColor: ["rgba(255, 159, 64, 0.2)"],
        borderColor: ["rgb(255, 159, 64)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: "Parts",
        },
      },
      y: {
        title: {
          display: true,
          text: "hello",
        },
        beginAtZero: true,
      },
    },
    legend: {
      labels: {
        fontSize: 26,
      },
    },
  };
  return <Bar height={400} options={options} data={data} />;
}
