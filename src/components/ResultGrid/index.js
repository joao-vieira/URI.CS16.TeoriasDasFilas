import React, { Fragment } from 'react';

import { InputLine } from './styles';

function ResultGrid(params) {
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
    </Fragment>
  );
};

export default ResultGrid;
