import React, { Fragment } from 'react';

import { InputLine, SimulateButton } from './styles';

function Data() {
  return (
    <Fragment>
      <InputLine>
        <input type="text" placeholder="" />
        <input type="text" placeholder="" />
        <input type="text" placeholder="" />
      </InputLine>
      <InputLine>
        <input type="text" placeholder="" />
        <input type="text" placeholder="" />
        <input type="text" placeholder="" />
      </InputLine>
      <SimulateButton>SIMULAR</SimulateButton>
    </Fragment>
  );
};

export default Data;
