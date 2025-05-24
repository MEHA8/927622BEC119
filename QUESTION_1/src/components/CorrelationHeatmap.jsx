import React from 'react';
import HeatMap from 'react-heatmap-grid';

const CorrelationHeatmap = ({ stockData }) => {
  const symbols = Object.keys(stockData);

  const calculateCorrelation = (arr1, arr2) => {
    const mean1 = arr1.reduce((a, b) => a + b, 0) / arr1.length;
    const mean2 = arr2.reduce((a, b) => a + b, 0) / arr2.length;

    let num = 0, den1 = 0, den2 = 0;
    for (let i = 0; i < arr1.length; i++) {
      const diff1 = arr1[i] - mean1;
      const diff2 = arr2[i] - mean2;
      num += diff1 * diff2;
      den1 += diff1 ** 2;
      den2 += diff2 ** 2;
    }
    return num / Math.sqrt(den1 * den2);
  };

  const data = symbols.map(rowSymbol =>
    symbols.map(colSymbol =>
      rowSymbol === colSymbol ? 1 : calculateCorrelation(stockData[rowSymbol].prices, stockData[colSymbol].prices).toFixed(2)
    )
  );

  return (
    <HeatMap
      xLabels={symbols}
      yLabels={symbols}
      data={data}
      squares
      height={45}
      background="white"
      cellStyle={value => ({
        background: `rgba(0, 0, 255, ${Math.abs(value)})`,
        color: '#000',
      })}
      cellRender={value => value}
    />
  );
};

export default CorrelationHeatmap;
