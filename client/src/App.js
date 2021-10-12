import * as React from 'react';
import styled from 'styled-components';
import Gallery from './components/Gallery';

const App = () => {
  return (
    <Root className="App">
      <Title>Lusha images service</Title>
      <Gallery />
    </Root>
  );
};

export default App;

const Root = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;
const Title = styled.h1``;
