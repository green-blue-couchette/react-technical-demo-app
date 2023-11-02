/**
 * Author O.A.
 * See the README at https://github.com/green-blue-couchette/react-technical-demo-app
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// REMOVE <React.StrictMode> if it causes issues.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
