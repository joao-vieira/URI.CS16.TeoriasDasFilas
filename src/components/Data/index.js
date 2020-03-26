import React, { Fragment } from 'react';

import { InputLine } from './styles';

function Data({ inputs, handleInputChange }) {
  return (
    <Fragment>
      <h5>Chegadas (λ)</h5>
      <hr/>
      <InputLine>
        <input type="number" id="entryOne" name="entryOne" value={inputs.entryOne} onChange={handleInputChange} />
        <input type="number" id="entryTwo" name="entryTwo" value={inputs.entryTwo} onChange={handleInputChange} />
        <input type="number" id="entryThree" name="entryThree" value={inputs.entryThree} onChange={handleInputChange} />
      </InputLine>
      <h5>Serviço (µ)</h5>
      <hr/>
      <InputLine>
        <input type="number" id="serviceOne" name="serviceOne" value={inputs.serviceOne} onChange={handleInputChange} />
        <input type="number" id="serviceTwo" name="serviceTwo" value={inputs.serviceTwo} onChange={handleInputChange} />
        <input type="number" id="serviceThree" name="serviceThree" value={inputs.serviceThree} onChange={handleInputChange} />
      </InputLine>
      
    </Fragment>
  );
};

export default Data;
