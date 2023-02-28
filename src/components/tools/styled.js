import styled, { css } from 'styled-components';

export const ToolsWrapper = styled.div`
  margin: 0px 20px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ToolButtonsWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  overflow: hidden;
  border-radius: 10px;
`;

export const ButtonStyled = () => {
  return css`
    background-color: ${ props => props.theme.baseFontColor };
    margin: 0;
    border: 1px solid white;
    color: white;
    width: 45px;
    height: 40px;
    cursor: pointer;
    font-size: 1.3rem;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
};

export const Button = styled.button`
  ${ ButtonStyled };

  &:hover {
    background-color: ${ props => props.theme.baseFontColorLight };
  }
`;


