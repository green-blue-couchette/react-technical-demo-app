/**
 * Author O.A.
 * See the README at https://github.com/green-blue-couchette/react-technical-demo-app
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// REMOVE <React.StrictMode> if it causes issues.

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
