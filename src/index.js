import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import 'modern-normalize/modern-normalize.css';
// import './Animal.scss'
// import BaseScss from './base.scss';
// import VariablesScss from './variables.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
);
