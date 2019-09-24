const {
  currencyValueFromResponse,
  quoteCurrency,
} = require('./coinmarket-api');
const requestify = require('requestify');

describe('coinmarket-api', () => {
  describe('currencyValueFromResponse', () => {
    it('should return from currency info its value', () => {
      const currency = 'BTC';
      const value = 1234;
      const currencyInfo = {
        data: {
          [currency]: {
            quote: {
              USD: {
                price: value,
              },
            },
          },
        },
      };

      expect(currencyValueFromResponse(currency, currencyInfo)).toBe(value);
    });
  });

  describe('quoteCurrency()', () => {
    const envOldValue = process.env;

    beforeEach(() => {
      jest.resetModules();
      process.env = { ...envOldValue };
    });

    afterEach(() => {
      process.env = envOldValue;
    });

    it('should not call requestify if MOCK_MODE is true', () => {
      process.env.MOCK_MODE = 'true';
      quoteCurrency('BTC');

      expect(requestify.get).not.toHaveBeenCalled();
    });

    it('should call requestify.get with expected parameters and return value from requestify', () => {
      const getBodyMockResponse = 'response';
      const getBodyMock = jest.fn().mockReturnValue(getBodyMockResponse);

      requestify.get.mockReturnValue(
        new Promise(resolve =>
          resolve({
            getBody: getBodyMock,
          }),
        ),
      );

      const API_KEY = 'my-key';
      process.env.API_KEY = API_KEY;

      expect(quoteCurrency('BTC')).resolves.toBe(getBodyMockResponse);

      expect(requestify.get).toHaveBeenCalled();
      const [baseUrl, options] = requestify.get.mock.calls[0];

      expect(baseUrl).toBe(
        'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',
      );

      expect(options).toMatchObject({
        headers: {
          'X-CMC_PRO_API_KEY': API_KEY,
        },
      });
    });
  });
});
