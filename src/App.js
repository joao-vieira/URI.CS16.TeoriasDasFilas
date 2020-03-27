import React, { Fragment, useState } from 'react';

import useForm from './utils/useForm';

import Container from './components/Container';
import SimulateButton from './components/SimulateButton';
import Config from './components/Config';
import Data from './components/Data';
import ResultGrid from './components/ResultGrid';
import Panels from './components/Panels';

import GlobalStyle from './styles/global';

function App() {
  function defineNewEntries() {
    const {time, entryOne, entryTwo, entryThree, serviceOne, serviceTwo, serviceThree} = inputs;

    const one = parseFloat(time / entryOne);
    const two = parseFloat(time / entryTwo);
    const three = parseFloat(time / entryThree);

    const servOne = parseFloat(time / serviceOne);
    const servTwo = parseFloat(time / serviceTwo);
    const servThree = parseFloat(time / serviceThree);

    setNewEntries({
      entries: [one, two, three],
      services: [servOne, servTwo, servThree]
    });
  };

  function calculate() {
    try {
      defineNewEntries();
      setShowResult(true);
    } catch (error) {
      console.log('E', error);
    }
  }

  const { inputs, handleInputChange, handleSubmit } = useForm({time: 0, clientsNumber: 0, entryOne: 0, entryTwo: 0, entryThree: 0, serviceOne: 0, serviceTwo: 0, serviceThree: 0}, calculate);
  const [newEntries, setNewEntries] = useState({entries: [], services: []});
  const [showResult, setShowResult] = useState(false);


  return (
    <Fragment>
      <Container>
        <h2 className="text-center">ENTRADA DE DADOS</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <Config inputs={inputs} handleInputChange={handleInputChange} />
          <Data inputs={inputs} handleInputChange={handleInputChange} />
          <SimulateButton>SIMULAR</SimulateButton>
        </form>
      </Container>
      {
        showResult &&
          <Container>
            <h2 className="text-center">RESULTADOS</h2>
            <ResultGrid inputs={newEntries} />
            <hr style={{ margin: '2% 0' }} />
            <Panels data={newEntries} clientsNumber={inputs.clientsNumber} />
          </Container>
      }
      <GlobalStyle />
    </Fragment>
  );
}

export default App;
