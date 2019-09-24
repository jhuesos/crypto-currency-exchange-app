import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CryptoPrice from './CryptoPrice';

describe('<CryptoPrice />', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    global.fetch.mockRestore();
  });

  it('should render without errors', () => {
    const { container } = render(<CryptoPrice />);

    expect(container.querySelector('input#currencyInput')).toBeInTheDocument();
    expect(container.querySelector('button[type=submit]')).toBeInTheDocument();
    expect(
      container.querySelector('label[for=currencyInput]'),
    ).toBeInTheDocument();
  });

  it('button should be disabled when input field is empty', () => {
    const { container } = render(<CryptoPrice />);
    const input = container.querySelector('input#currencyInput');
    const button = container.querySelector('button[type=submit]');

    expect(button.hasAttribute('disabled')).toBe(true);

    fireEvent.change(input, { target: { value: 'BTC' } });
    expect(button.hasAttribute('disabled')).toBe(false);
  });

  it('submitting form should fetch and change state accordingly', async () => {
    global.fetch.mockReturnValue(() => Promise.resolve({ USD: 1234 }));

    const { container, queryByTestId } = render(<CryptoPrice />);

    const input = container.querySelector('input#currencyInput');
    const button = container.querySelector('button[type=submit]');
    const currencyTableContainer = queryByTestId('currency-table-container');

    fireEvent.change(input, { target: { value: 'BTC' } });
    fireEvent.click(button);

    expect(currencyTableContainer.textContent).toBe('Searching...');
    await wait(() => queryByTestId('currency-table-results'));

    expect(currencyTableContainer.textContent).not.toBe('Searching...');
    expect(queryByTestId('currency-table-results')).toBeInTheDocument();
  });
});
