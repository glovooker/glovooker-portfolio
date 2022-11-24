import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import './i18n';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
