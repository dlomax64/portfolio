import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import '../node_modules/react-bootstrap/dist/react-bootstrap.min.js';
import './Styles/index.css';
import App from './Components/App/App';
import reportWebVitals from './Utils/reportWebVitals';

render(
  <>
    <App />
  </>,
  document.getElementById('root')
);

reportWebVitals();
