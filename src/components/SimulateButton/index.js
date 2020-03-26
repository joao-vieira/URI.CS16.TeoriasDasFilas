import styled from 'styled-components';

const SimulateButton = styled.button.attrs(props => ({
  type: 'submit',
}))`
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

export default SimulateButton;