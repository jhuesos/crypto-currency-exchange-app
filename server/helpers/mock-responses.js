const LATEST_RESPONSE = {
  status: {
    timestamp: '2019-09-24T07:38:43.323Z',
    error_code: 0,
    error_message: null,
    elapsed: 13,
    credit_count: 1,
    notice: null,
  },
  data: [
    {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      slug: 'bitcoin',
      num_market_pairs: 8012,
      date_added: '2013-04-28T00:00:00.000Z',
      tags: ['mineable'],
      max_supply: 21000000,
      circulating_supply: 17954000,
      total_supply: 17954000,
      platform: null,
      cmc_rank: 1,
      last_updated: '2019-09-24T07:37:34.000Z',
      quote: {
        USD: {
          price: 9780.58321719,
          volume_24h: 15730650220.5907,
          percent_change_1h: -0.191308,
          percent_change_24h: -1.73734,
          percent_change_7d: -4.54736,
          market_cap: 175600591081.42926,
          last_updated: '2019-09-24T07:37:34.000Z',
        },
      },
    },
    {
      id: 1027,
      name: 'Ethereum',
      symbol: 'ETH',
      slug: 'ethereum',
      num_market_pairs: 5608,
      date_added: '2015-08-07T00:00:00.000Z',
      tags: ['mineable'],
      max_supply: null,
      circulating_supply: 107870637.6865,
      total_supply: 107870637.6865,
      platform: null,
      cmc_rank: 2,
      last_updated: '2019-09-24T07:38:23.000Z',
      quote: {
        USD: {
          price: 200.034518738,
          volume_24h: 7810071896.14109,
          percent_change_1h: -0.82657,
          percent_change_24h: -4.60217,
          percent_change_7d: 0.740241,
          market_cap: 21577851095.580193,
          last_updated: '2019-09-24T07:38:23.000Z',
        },
      },
    },
    {
      id: 52,
      name: 'XRP',
      symbol: 'XRP',
      slug: 'ripple',
      num_market_pairs: 460,
      date_added: '2013-08-04T00:00:00.000Z',
      tags: [],
      max_supply: 100000000000,
      circulating_supply: 43080011224,
      total_supply: 99991343356,
      platform: null,
      cmc_rank: 3,
      last_updated: '2019-09-24T07:38:07.000Z',
      quote: {
        USD: {
          price: 0.269863739106,
          volume_24h: 1641592449.82076,
          percent_change_1h: -0.209035,
          percent_change_24h: -1.15346,
          percent_change_7d: 1.97953,
          market_cap: 11625732909.637087,
          last_updated: '2019-09-24T07:38:07.000Z',
        },
      },
    },
    {
      id: 1831,
      name: 'Bitcoin Cash',
      symbol: 'BCH',
      slug: 'bitcoin-cash',
      num_market_pairs: 397,
      date_added: '2017-07-23T00:00:00.000Z',
      tags: ['mineable'],
      max_supply: 21000000,
      circulating_supply: 18020300,
      total_supply: 18020300,
      platform: null,
      cmc_rank: 4,
      last_updated: '2019-09-24T07:38:06.000Z',
      quote: {
        USD: {
          price: 290.41294491,
          volume_24h: 1652924333.05988,
          percent_change_1h: -0.862353,
          percent_change_24h: -5.32406,
          percent_change_7d: -5.86929,
          market_cap: 5233328391.161674,
          last_updated: '2019-09-24T07:38:06.000Z',
        },
      },
    },
    {
      id: 2,
      name: 'Litecoin',
      symbol: 'LTC',
      slug: 'litecoin',
      num_market_pairs: 535,
      date_added: '2013-04-28T00:00:00.000Z',
      tags: ['mineable'],
      max_supply: 84000000,
      circulating_supply: 63323491.6355418,
      total_supply: 63323491.6355418,
      platform: null,
      cmc_rank: 5,
      last_updated: '2019-09-24T07:38:03.000Z',
      quote: {
        USD: {
          price: 67.2870418672,
          volume_24h: 3444993343.57028,
          percent_change_1h: -0.21679,
          percent_change_24h: -8.18759,
          percent_change_7d: -7.7094,
          market_cap: 4260850432.8579903,
          last_updated: '2019-09-24T07:38:03.000Z',
        },
      },
    },
    {
      id: 825,
      name: 'Tether',
      symbol: 'USDT',
      slug: 'tether',
      num_market_pairs: 3272,
      date_added: '2015-02-25T00:00:00.000Z',
      tags: [],
      max_supply: null,
      circulating_supply: 4108044456.1,
      total_supply: 4207771504.46,
      platform: {
        id: 83,
        name: 'Omni',
        symbol: 'OMNI',
        slug: 'omni',
        token_address: '31',
      },
      cmc_rank: 6,
      last_updated: '2019-09-24T07:38:15.000Z',
      quote: {
        USD: {
          price: 1.00219189825,
          volume_24h: 19712380978.1904,
          percent_change_1h: -0.102798,
          percent_change_24h: -0.104623,
          percent_change_7d: -0.235701,
          market_cap: 4117048871.554248,
          last_updated: '2019-09-24T07:38:15.000Z',
        },
      },
    },
  ],
};

const BIT_COIN_RESPONSE = {
  status: {
    timestamp: '2019-09-24T08:28:37.232Z',
    error_code: 0,
    error_message: null,
    elapsed: 11,
    credit_count: 1,
    notice: null,
  },
  data: {
    BTC: {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      slug: 'bitcoin',
      num_market_pairs: 8012,
      date_added: '2013-04-28T00:00:00.000Z',
      tags: ['mineable'],
      max_supply: 21000000,
      circulating_supply: 17954062,
      total_supply: 17954062,
      platform: null,
      cmc_rank: 1,
      last_updated: '2019-09-24T08:27:33.000Z',
      quote: {
        USD: {
          price: 9773.01775108,
          volume_24h: 15795165632.5404,
          percent_change_1h: -0.115839,
          percent_change_24h: -1.91131,
          percent_change_7d: -4.60029,
          market_cap: 175465366629.9909,
          last_updated: '2019-09-24T08:27:33.000Z',
        },
      },
    },
  },
};

const EXCHANGE_RESPONSE = {
  rates: {
    CAD: 1.3278106509,
    HKD: 7.8394173873,
    ISK: 124.8975876195,
    PHP: 52.1365498407,
    DKK: 6.7969048703,
    HUF: 304.6153846154,
    CZK: 23.5685025034,
    GBP: 0.8042148384,
    RON: 4.3238962221,
    SEK: 9.7535730542,
    IDR: 14084.9977241693,
    INR: 70.9517523896,
    BRL: 4.1570323168,
    RUB: 63.9633136095,
    HRK: 6.7426490669,
    JPY: 107.4829312699,
    THB: 30.4952207556,
    CHF: 0.9914428766,
    EUR: 0.9103322713,
    MYR: 4.1853436504,
    BGN: 1.7804278562,
    TRY: 5.7195266272,
    CNY: 7.1259899863,
    NOK: 9.0781065089,
    NZD: 1.5943559399,
    ZAR: 14.8807464725,
    USD: 1,
    MXN: 19.4222121074,
    SGD: 1.3782430587,
    AUD: 1.4769230769,
    ILS: 3.515430132,
    KRW: 1197.3327264452,
    PLN: 3.9890760127,
  },
  base: 'USD',
  date: '2019-09-23',
};

module.exports = {
  LATEST_RESPONSE,
  BIT_COIN_RESPONSE,
  EXCHANGE_RESPONSE,
};
