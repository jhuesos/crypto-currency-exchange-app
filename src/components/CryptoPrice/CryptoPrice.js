import React, { useState } from 'react';

import styled from 'styled-components';

import CurrencyTable from './CurrencyTable';
import { queryValues } from '../../api/currencies';

export default function CryptoPrice() {
  const [symbol, setSymbol] = useState('');
  const [results, setResults] = useState({});

  const [isSearching, setIsSearching] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSearching(true);

    try {
      const results = await queryValues(symbol);
      setResults(results);
    } catch (error) {
      // FIXME: we should always do something with errors. Future improement
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <Container>
      <InputContainer>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="currencyInput">Crypto Currency:</Label>
          <InputStyled
            id="currencyInput"
            type="text"
            value={symbol}
            onChange={e => setSymbol(e.target.value)}
          />

          <Button
            type="submit"
            disabled={symbol.trim() === '' ? 'disabled' : false}
          >
            Request
          </Button>
        </Form>
      </InputContainer>
      <CurrencyTableContainer data-testid="currency-table-container">
        {isSearching ? (
          <div>Searching...</div>
        ) : (
          <div data-testid="currency-table-results">
            <CurrencyTable data={results} />
          </div>
        )}
      </CurrencyTableContainer>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InputContainer = styled.div`
  width: 100%;
  flex: none;
  display: flex;
`;

const Form = styled.form`
  width: 100%;
  flex: none;
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  padding: 0 12px;
`;

const InputStyled = styled.input`
  flex: 1;
  padding: 12px 24px;
`;

const Button = styled.button`
  height: 100%;
  padding: 8px;
`;

const CurrencyTableContainer = styled.div`
  width: 100%;
  flex: 1;
  padding: 24px;
`;
