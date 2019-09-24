const requestify = require('requestify');
const { BIT_COIN_RESPONSE } = require('./mock-responses');

const quoteCurrency = async symbol => {
  const BASE_URL = 'https://pro-api.coinmarketcap.com/v1';
  const API_OPTIONS = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-CMC_PRO_API_KEY': process.env.API_KEY,
    },
    dataType: 'json',
  };

  if (process.env.MOCK_MODE === 'true') {
    console.log('Mock response');
    return new Promise(resolve => resolve(BIT_COIN_RESPONSE));
  }

  const response = await requestify.get(
    `${BASE_URL}/cryptocurrency/quotes/latest`,
    {
      ...API_OPTIONS,
      params: {
        symbol,
      },
    },
  );

  return response.getBody();
};

const currencyValueFromResponse = (symbol, response) => {
  const { data } = response;
  const value = data[symbol];
  const {
    quote: {
      USD: { price },
    },
  } = value;
  return price;
};

module.exports = {
  quoteCurrency,
  currencyValueFromResponse,
};
