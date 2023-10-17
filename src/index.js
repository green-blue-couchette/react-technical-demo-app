/**
 * Author O.A.
 * Date october-16-2023
 * 
 * V3: Make it a 3-page application.
 * pg 1 = The animal photo gallery
 * pg 2 = A train photo (wip)
 * pg 3 = A workout photo (wip)
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
