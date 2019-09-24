const { getExchangeRates } = require('./exchangerates-api');
const requestify = require('requestify');

describe('exchangerates-api', () => {
  describe('getExchangeRates()', () => {
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
      getExchangeRates();

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

      expect(getExchangeRates()).resolves.toBe(getBodyMockResponse);

      expect(requestify.get).toHaveBeenCalled();
      const [baseUrl] = requestify.get.mock.calls[0];

      expect(baseUrl).toBe(
        'https://api.exchangeratesapi.io/latest?base=USD',
      );
    });
  });
});
