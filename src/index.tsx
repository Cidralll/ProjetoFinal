import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/components/body-home.scss';
import './styles/components/font.scss';

import Router from './router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);


