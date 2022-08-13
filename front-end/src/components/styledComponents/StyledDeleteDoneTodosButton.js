import styled from 'styled-components';

const StyledDeleteDoneTodosButton = styled.button`
  width: 200px;
  height: 30px;
  border-radius: 8px;
  outline: none;
  border: none;
  font-size: 18px;
  margin-top: 7.5px;
  margin-bottom: 7.5px;
  cursor: pointer;
  background-color: #D65A31;
  color: #EEEEEE;
  box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
  &:hover {
    transform: scale(1.02);
    box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;

export default StyledDeleteDoneTodosButton;
