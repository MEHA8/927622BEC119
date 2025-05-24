import React, { useEffect, useState } from 'react';
import { fetchMultipleStocksData } from './api';
import StockChart from './components/StockChart';
import CorrelationHeatmap from './components/CorrelationHeatmap';

const App = () => {
  const [stockData, setStockData] = useState({});
  const symbols = ['AAPL', 'GOOGL', 'MSFT']; // Example symbols

  useEffect(() => {
    fetchMultipleStocksData(symbols).then(setStockData);
  }, []);

  return (
    <div>
      <h1>📈 Stock Aggregator</h1>
      {Object.keys(stockData).map(symbol => (
        <StockChart key={symbol} symbol={symbol} data={stockData[symbol]} />
      ))}
      <h2>📊 Correlation Heatmap</h2>
      <CorrelationHeatmap stockData={stockData} />
    </div>
  );
};

export default App;
