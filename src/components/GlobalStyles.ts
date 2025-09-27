import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html {
    font-family: Helvetica, sans-serif;
    font-size: 16px;
  }
  
  body {
    margin: 0;
  }
`;
