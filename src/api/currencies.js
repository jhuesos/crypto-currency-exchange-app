export const queryValues = async (symbol = 'BTC') => {
  const response = await fetch(`/quote?symbol=${symbol}`);

  if (!response.ok) {
    throw response;
  }

  return response.json();
};
