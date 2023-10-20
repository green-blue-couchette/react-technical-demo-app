/**
 * Author O.A.
 * Date october-20-2023
 * 
 * V3.1
 * 
 * TODO: 
 * x - Prepare to publish repository to GitHub...
 *    x - Rename this project to "react-technical-demo-app"
 *    x - Update title of the app and text descriptions where relevant.
 * 
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
