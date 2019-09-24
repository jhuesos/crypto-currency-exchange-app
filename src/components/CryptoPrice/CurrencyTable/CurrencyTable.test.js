import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CurrencyTable from './CurrencyTable';

describe('<CurrencyTable/>', () => {
  it('message should be displayed when no data is provided', () => {
    const { queryByTestId } = render(<CurrencyTable data={{}} />);

    expect(queryByTestId('results-table')).not.toBeInTheDocument();
    expect(queryByTestId('empty-msg')).toBeInTheDocument();
  });

  it('should render a table with one line per entry in the data-set', () => {
    const data = {
      USD: 123.45,
      EUR: 34,
      GBP: 2,
    };
    const { container } = render(<CurrencyTable data={data} />);

    const rows = Array.from(container.querySelectorAll('tbody tr'));
    expect(rows.length).toBe(Object.keys(data).length);

    expect(rows[0].textContent).toBe(`${data.USD}USD`);
    expect(rows[1].textContent).toBe(`${data.EUR}EUR`);
    expect(rows[2].textContent).toBe(`${data.GBP}GBP`);
  });
});
