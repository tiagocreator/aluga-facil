import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const renderApp = (rootElement: HTMLElement | null) => {
  const root = ReactDOM.createRoot(rootElement as HTMLElement);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  renderApp(rootElement);
} else {
  throw new Error('Elemento raiz não encontrado no documento.');
}
