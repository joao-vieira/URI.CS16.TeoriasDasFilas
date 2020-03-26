import React, { Fragment } from 'react';

import { InputLine } from './styles';

function Config({  }) {
  return (
    <Fragment>
      <InputLine>
        <input type="text" placeholder="Tempo (minutos)" />
        <input type="text" placeholder="Clientes (máx)" />
      </InputLine>
    </Fragment>
  );
};

export default Config;
