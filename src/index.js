import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Helmet from 'react-helmet';
import favicon from '../src/Img/Logo.png'; // Substitua o caminho do ícone

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Helmet>
      <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
    </Helmet>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
