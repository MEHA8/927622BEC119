import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

const StockChart = ({ symbol, data }) => {
  const chartData = {
    labels: data.timestamps,
    datasets: [
      {
        label: `${symbol} Price`,
        data: data.prices,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
      },
    ],
  };

  return <Line data={chartData} />;
};

export default StockChart;
