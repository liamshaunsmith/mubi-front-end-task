import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html {
    color: ${({ theme }) => theme.colors.text};
    font-family: Helvetica, sans-serif;
    font-size: 16px;
  }
  
  body {
    margin: 0;
  }
  
  a {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }

  h1, h2 {
    margin: 0;
  }
`;
