import { ThemeProvider } from 'styled-components';

import { theme } from '../theme.ts';

import { GlobalStyles } from './GlobalStyles.ts';
import { Router } from './Router.tsx';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
};
