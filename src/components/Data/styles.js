import styled from 'styled-components';

export const InputLine = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2%;

  input {
    outline: none;
    border: 0.5px solid #DDD;
    border-radius: 5px;
    padding: 10px 30px;
    font-size: 14px;
    text-align: center;
  }
`;

export const SimulateButton = styled.button `
  width: 100%;
  border-radius: 8px;
  border: none;
  padding: 2%;
  margin: 1%;
  font-size: 18px;
  font-weight: 700;
  color: white;
  background-color: #4CA1AF;
`;
