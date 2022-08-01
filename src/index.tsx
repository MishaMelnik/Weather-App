import React from 'react';
// REACT-DOM
import ReactDOM from 'react-dom/client';
// COMPONENT
import App from './App';
// CONTEXT
import { GlobalProvider } from './context/GlobalState';
// STYLES
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
