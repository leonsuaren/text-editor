import styled from 'styled-components';

export const Title = styled.input`
  border: none;
  height: 100%;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2;
  letter-spacing: 1;
  padding: 0px 20px;
  opacity: .6;
  border-left: 2px solid ${ props => props.theme.baseFontColor };
  border-right: 2px solid ${ props => props.theme.baseFontColor };
  outline: none;
  outline-width: 0;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 1.5rem;
  }

`;