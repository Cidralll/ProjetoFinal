import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/components/body-home.scss';
import './styles/components/font.scss';

import Login from './Components/login';
import Home from './Components-Home/home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    
    <Home />
    
  </React.StrictMode>
);


