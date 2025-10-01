import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import { theme } from '../theme.ts';
import { store } from '../store/store.ts';

import { GlobalStyles } from './GlobalStyles.ts';
import { Router } from './Router.tsx';
import { DataFetcher } from './DataFetcher.tsx';

export const App = () => {
  return (
    <Provider store={store}>
      <DataFetcher>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Router />
        </ThemeProvider>
      </DataFetcher>
    </Provider>
  );
};
