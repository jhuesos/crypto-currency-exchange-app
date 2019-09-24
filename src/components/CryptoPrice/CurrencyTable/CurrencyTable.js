import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export default function CurrencyTable({ data }) {
  if (data == null || Object.keys(data).length === 0) {
    return (
      <MsgContainer data-testid="empty-msg">
        <p>No results</p>
        <PBold>
          This app is not production ready. So please search for an existing
          currency like BTC, ETH, XRP (case sensitive).
        </PBold>
      </MsgContainer>
    );
  }

  const rows = Object.keys(data).map(currency => (
    <tr key={currency}>
      <Td>{data[currency]}</Td>
      <Td>{currency}</Td>
    </tr>
  ));

  return (
    <Table data-testid="results-table">
      <thead>
        <tr>
          <Th>Value</Th>
          <Th>Currency</Th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

const Table = styled.table`
  margin-top: 16px;
  width: 100%;
`;

const cellStyles = css`
  text-align: left;
  padding: 4px 8px;
`;

const Th = styled.th`
  ${cellStyles}
`;

const Td = styled.td`
  ${cellStyles}
`;

const MsgContainer = styled.div`
  padding: 24px;
`;

const PBold = styled.p`
  font-weight: bold;
`;

CurrencyTable.propTypes = {
  data: PropTypes.object.isRequired,
};
