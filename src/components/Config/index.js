import React, { Fragment } from 'react';

import { InputLine } from './styles';

function Config({ inputs, handleInputChange }) {
  return (
    <Fragment>
      <InputLine>
        <label htmlFor="time">Tempo (min)</label>
        <input type="number" id="time" name="time" value={inputs.time} onChange={handleInputChange} />
        <label htmlFor="clients">Clientes (máx)</label>
        <input type="number" id="clientsNumber" name="clientsNumber" value={inputs.clientsNumber} onChange={handleInputChange}  />
      </InputLine>
    </Fragment>
  );
};

export default Config;
