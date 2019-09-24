require('dotenv').config();

const express = require('express');
const {
  quoteCurrency,
  currencyValueFromResponse,
} = require('./helpers/coinmarket-api');
const { getExchangeRates } = require('./helpers/exchangerates-api');
const { SUPPORTED_CURRENCIES } = require('./constants');
const { exchange } = require('./helpers/convert');

const app = express();
const PORT = 3001;

app.get('/quote', async ({ query }, res, next) => {
  try {
    // FIXME: check if it is valid symbol before calling coinmarket
    /* An improvement would be that before calling exchangerates-api to check if
    the symbol provided exists. */
    const { symbol } = query;

    if (symbol == null) {
      res.statusMessage = 'No Symbol parameters passed';
      res.status(400).end();
      return;
    }

    const [currencyQuote, { rates }] = await Promise.all([
      quoteCurrency(symbol),
      getExchangeRates(),
    ]);

    const valueOfCryptoCurrency = currencyValueFromResponse(
      symbol,
      currencyQuote,
    );

    res.json(exchange(rates, SUPPORTED_CURRENCIES, valueOfCryptoCurrency));
  } catch (e) {
    // We pass the error to the app default error handling. In this case, as we
    // haven't set one, it will use Express default error handler.
    next(e);
  }
});

app.listen(PORT, function() {
  console.log(`Server running in port ${PORT}`);
});
