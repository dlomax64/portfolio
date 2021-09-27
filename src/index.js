import React from 'react';
import { render } from 'react-dom';
import '../node_modules/react-bootstrap/dist/react-bootstrap.min.js';
import App from './App';
import reportWebVitals from './Utils/reportWebVitals';

render (
  <App />,
  document.getElementById('root')
);

reportWebVitals();
