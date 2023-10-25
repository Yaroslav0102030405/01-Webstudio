import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

import 'modern-normalize/modern-normalize.css';
// import './Animal.scss'
// import BaseScss from './base.scss';
// import VariablesScss from './variables.scss';

import global__en from './components/Translation/en/global.json';
import global__uk from './components/Translation/uk/global.json';
import global__ru from './components/Translation/ru/global.json';

import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      global: global__en,
    },
    uk: {
      global: global__uk,
    },
    ru: {
      global: global__ru,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>,
);
