# Cryto Currency Exchange App

> In this project, `yarn` is used as the tool to install and run the project.
> Everything would work the same replacing the `yarn` command for its equivalent
> from `npm`.

## Set up project dependencies

```bash
yarn
```

## To run the project

**Please make sure you read completely this section before trying to run the 
project.**

This project uses the Coinmarketcap and Exchangeratesapi public APIs to fetch 
the current cryptocurrency and currency exchange rate values. In order to use
Coinmarketcap APIs, you need to provide a private API_KEY. As it is considered
a very bad security practices to include secrets like API_KEY in any repository
you must provide that API_KEY yourself. To do that, you have two ways:

- Add a `.env` file in the root folder of this project with the following 
content:

```
API_KEY=YOUR_API_KEY_HERE
```

- Or set `API_KEY` as an environment variable in your system.

Once you have done that, you can run the project like this:

```bash
yarn
```

Or if you want to set an inline environment variable:

```bash
API_KEY=YOUR_KEY yarn start
```

**IMPORTANT:** The project runs the client server in port `3000` and proxy
server in the port `3001`. This values are hardcoded so make sure you are not
running anything on those server. On a real application, I would make this
values configurable, but to keep it simple, I decided not to change them.

### Mock mode
If you setup the environment variable `MOCK_MODE=true`, you will get the API 
responses from mock data in the server. This only works with `BTC`.

You can do that by adding the value to the `.env` file or by setting the value
as an environment variable in your machine.

## Run the tests

```bash
yarn test:client # to run client side tests
yarn test:server # to run server side tests
```
