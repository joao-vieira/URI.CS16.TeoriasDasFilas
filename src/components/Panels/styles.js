import styled from 'styled-components';

export const PanelsLine = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

export const Panel = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10%;
`;

export const Table = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: center;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #EEE;
  }
`;
