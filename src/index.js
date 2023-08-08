import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './style.js';
import { Global } from './style.js';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Project4/">
      <Global />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
