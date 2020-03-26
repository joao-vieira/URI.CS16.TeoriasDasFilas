import React, { Fragment, useState } from 'react';

import Container from './components/Container';
import Config from './components/Config';
import Data from './components/Data';
import ResultGrid from './components/ResultGrid';
import Panels from './components/Panels';

import GlobalStyle from './styles/global';

function App() {
  const [time, setTime] = useState(0);
  const [clients, setClients] = useState(0);
  const [entries, setEntries] = useState([]);
  const [services, setServices] = useState([]);
  const [result, setResult] = useState(true);

  return (
    <Fragment>
      <Container>
        <h2 className="text-center">ENTRADA DE DADOS</h2>
        <Config  />
        <Data />
      </Container>
      {
        result &&
          <Container>
            <h2 className="text-center">RESULTADOS</h2>
            <ResultGrid />
            <hr style={{ margin: '2% 0' }} />
            <Panels />
          </Container>
      }
      <GlobalStyle />
    </Fragment>
  );
}

export default App;
