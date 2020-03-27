import React, { useState, useEffect } from 'react';

import { averageNumber, averageTime, averageRate, probability } from '../../utils/funcs';

import { PanelsLine, Panel, Table } from './styles';

function Panels({ data, clientsNumber }) {
  useEffect(() => {
    const { entries, services } = data;    
    const scenarios = ['A', 'B', 'C'];

    const newTableLeft = entries.map((entry, idx) => {
      return {
        scenario: scenarios[idx],
        number: averageNumber(entry, services[idx]),
        time: averageTime(entry, services[idx]),
        rate: averageRate(entry, services[idx]),
      };
    });

    let newTableRight = [];
    for (let i = 0; i < clientsNumber; i++) {
      const obj = entries.map((entry, idx) => probability(entry, services[idx], i));
      newTableRight.push({
        p: `P(${i})`,
        values: obj
      }); 
    }

    setTableLeft(newTableLeft);
    setTableRight(newTableRight);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [tableLeft, setTableLeft] = useState([]);
  const [tableRight, setTableRight] = useState([]);

  return (
    <PanelsLine>
      <Panel>
        <Table>
          <thead>
            <tr>
              <th className="text-center">Cenário</th>
              <th className="text-center">Nº Médio de Objetos</th>
              <th className="text-center">Tempo Médio Despendido</th>
              <th className="text-center">Taxa Média de Ocupação</th>
            </tr>
          </thead>
          <tbody>
            {tableLeft.map((row, idx) => (
              <tr key={idx}>
                <td className="text-center">{row.scenario}</td>
                <td className="text-center">{row.number}</td>
                <td className="text-center">{row.time}</td>
                <td className="text-center">{row.rate}</td>  
              </tr>
            ))}
          </tbody>
        </Table>
      </Panel>
      <Panel>
        <Table>
          <thead>
            <tr>
              <th className="text-center">P(x)</th>
              <th className="text-center">A</th>
              <th className="text-center">B</th>
              <th className="text-center">C</th>
            </tr>
          </thead>
          <tbody>
            {tableRight.map((row, idx) => (
              <tr key={idx}>
                <td className="text-center">{row.p}</td>
                {row.values.map((value, idx2) => <td key={idx2} className="text-center">{value}</td>)}
              </tr>
            ))}
          </tbody>
        </Table>
      </Panel>
    </PanelsLine>
  );
};

export default Panels;
