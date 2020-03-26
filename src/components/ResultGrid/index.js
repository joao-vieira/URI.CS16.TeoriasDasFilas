import React, { Fragment } from 'react';

import { InputLine } from './styles';

function ResultGrid({ inputs }) {
  const { entries, services } = inputs;

  return (
    <Fragment>
      <InputLine>
        {entries.map((entry, idx) => <input type="text" key={idx} value={parseFloat(entry).toFixed(2)} readOnly disabled />)}
      </InputLine>
      <InputLine>
        {services.map((service, idx) => <input type="text" key={idx} value={parseFloat(service).toFixed(2)} readOnly disabled />)}
      </InputLine>
    </Fragment>
  );
};

export default ResultGrid;
