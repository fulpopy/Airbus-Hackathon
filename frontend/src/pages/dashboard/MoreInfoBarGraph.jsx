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

export default function MoreInfoBarGraph({ d1, y }) {
  const labels = [
    // "New Part CarbonFootprint",
    // "recycledPartCarbonFoot",
    // "toxicityNewPart",
    // "toxicityRecycledPart",
    // "waterUsageNewPart",
    // "waterUsageRecycledPart"
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "PARTS DATA",
        data: d1,
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgb(255, 99, 132)"],
        borderWidth: 1,
      },
      //   {
      //     label: "NEW PARTS",
      //     data: d2,
      //     backgroundColor: ["rgba(255, 159, 64, 0.2)"],
      //     borderColor: ["rgb(255, 159, 64)"],
      //     borderWidth: 1,
      //   },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: "Part Economic info",
        },
      },
      y: {
        title: {
          display: true,
          text: y,
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
