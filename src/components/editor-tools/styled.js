import styled from 'styled-components';

export const EditorToolsWrapre = styled.div`
  display: grid;
  grid-template-columns: 90% 10%;
  align-items: center;
  margin: 0;
  padding: 0;
  box-shadow: 0px 0px 5px 5px #CCCCCC;
  border-radius: 10px;
  border-left: 5px solid ${ props => props.theme.baseFontColor };
  border-right: 5px solid ${ props => props.theme.baseFontColor };

  @media screen and (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: 80% 20%;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: 80% 20%;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: 85% 15%;
  }
`;