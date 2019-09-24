import React from 'react';
import styled from 'styled-components';

import CryptoPrice from './components/CryptoPrice';

function App() {
  return (
    <Container>
      <CryptoPrice />
    </Container>
  );
}

const Container = styled.div`
  background-color: #282c34;
  font-size: 16px;
  color: white;
`;

export default App;
