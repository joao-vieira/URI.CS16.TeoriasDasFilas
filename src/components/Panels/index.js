import React from 'react';

import { PanelsLine, Panel } from './styles';

function Panels() {
  return (
    <PanelsLine>
      <Panel>
        Nº Médio de Carros no Sistema <br/>
        Tempo Médio Despendido no Sistema <br/>
        Taxa Média de Ocupação do Servidor
      </Panel>
      <Panel>
        <table>
          <thead>
            <tr>
              <th className="text-center">P(x)</th>
              <th className="text-center">Cenário A</th>
              <th className="text-center">Cenário B</th>
              <th className="text-center">Cenário C</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">uahsahus</td>
              <td className="text-center">uahsahus</td>
              <td className="text-center">uahsahus</td>
              <td className="text-center">uahsahus</td>
            </tr>
            <tr>
              <td className="text-center">uahsahus</td>
              <td className="text-center">uahsahus</td>
              <td className="text-center">uahsahus</td>
              <td className="text-center">uahsahus</td>
            </tr>
          </tbody>
        </table>
      </Panel>
    </PanelsLine>
  );
};

export default Panels;
