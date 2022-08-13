import styled from 'styled-components';

const StyledCheckbox = styled.label`
  min-width: 30px;
  min-height: 30px;
  border-radius: 50%;
  background: #9299a5;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  margin-right: 15px;
  

  &:hover {
    transform: scale(1.04);
    box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
    min-width: 30px;
    min-height: 30px;
    border-radius: 50%;
    background: #9299a5;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
    margin-right: 15px;
  }
`;

export default StyledCheckbox;
