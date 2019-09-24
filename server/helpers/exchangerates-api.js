const requestify = require('requestify');
const { EXCHANGE_RESPONSE } = require('./mock-responses');

const getExchangeRates = async (currency = 'USD') => {
  if (process.env.MOCK_MODE === 'true') {
    console.log('ExchangeRatesAPI Mock response');
    return new Promise(resolve => resolve(EXCHANGE_RESPONSE));
  }

  const response = await requestify.get(
    `https://api.exchangeratesapi.io/latest?base=${currency}`,
  );

  return response.getBody();
};

module.exports = {
  getExchangeRates,
};
