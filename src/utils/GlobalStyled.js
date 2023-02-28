import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6, p, a {
    font-family: medium-content-sans-serif-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
    color: ${ props => props.theme.baseFontColor };
  }
`;