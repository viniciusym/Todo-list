import styled, { css } from 'styled-components';

const StyledTodoDescription = styled.p`
  overflow-wrap: break-word;
  font-weight: 500;
  font-size: 18px;
  max-width: 400px;

  ${(props) => (
    props.done && css`
      text-decoration: line-through;
      font-weight: 300;
    `
  )}
`;

export default StyledTodoDescription;
