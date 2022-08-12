import styled from 'styled-components';

const StyledCheckbox = styled.label`
  min-width: 30px;
  min-height: 30px;
  border-radius: 50%;
  background: #F6F6F6;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  margin-right: 15px;
  

  &:hover {
    border: 1px solid black;
    min-width: 30px;
    min-height: 30px;
    border-radius: 50%;
    background: #F6F6F6;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
    margin-right: 15px;
  }
`;

export default StyledCheckbox;
