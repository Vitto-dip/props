import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App/App.js';
import VarEstado from './pages/VarEstado/index.js'
import Mediocrie from './pages/mediafire';
import Renderização from './components/renderização';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Renderização />
  </React.StrictMode>
);

