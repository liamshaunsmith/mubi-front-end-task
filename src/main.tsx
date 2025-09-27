import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './components/App.tsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('Unable to find root element.');
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
