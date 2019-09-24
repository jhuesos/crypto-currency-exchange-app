const exchange = (rates, toCurrencies = [], value) =>
  toCurrencies.reduce(
    (result, currency) => ({
      ...result,
      // FIXME: when operating with floating point numbers in JS, precision is lost
      // when operating with certain values. In a production environment this should
      // be fixed finding a good strategy.
      [currency]: value * rates[currency],
    }),
    {},
  );

module.exports = {
  exchange,
};
