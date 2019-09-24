const { exchange } = require('./convert');

describe('server/convert', () => {
  it('should return empty object if toCurrencies are empty', () => {
    expect(exchange(null, [], 1234)).toEqual({});
  });

  it('should return object with value exchange to target currencies', () => {
    const toCurrencies = ['GBP', 'EUR'];
    const rates = { GBP: 1.5, EUR: 10 };
    const value = 10;

    expect(exchange(rates, toCurrencies, value)).toEqual({
      GBP: rates.GBP * value,
      EUR: rates.EUR * value,
    });
  });
});
