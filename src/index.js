import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App/App.js';
import VarEstado from './pages/VarEstado/index.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <VarEstado />
  </React.StrictMode>
);

