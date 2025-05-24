import axios from 'axios';

const BASE_URL = 'https://phx.unusualwhales.com/api'; // example base, change as needed

export const fetchStockData = async (symbol, interval = 15) => {
  const res = await axios.get(`${BASE_URL}/stock/${symbol}?interval=${interval}`);
  return res.data;
};

export const fetchMultipleStocksData = async (symbols, interval = 15) => {
  const data = {};
  for (const symbol of symbols) {
    data[symbol] = await fetchStockData(symbol, interval);
  }
  return data;
};
