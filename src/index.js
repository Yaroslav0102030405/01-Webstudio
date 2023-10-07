import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

import 'modern-normalize/modern-normalize.css';
// import './Animal.scss'
// import BaseScss from './base.scss';
// import VariablesScss from './variables.scss';

import en from './components/Trans/en.json'
import uk from './components/Trans/uk.json'
import ru from './components/Trans/ru.json'
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

 i18next.init({
   interpolation: { escapeValue: false },
   lng: 'en',
   resources: {
     en: {
       global: en,
     },
     uk: {
       global: uk,
     },
     ru: {
       global: ru,
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
