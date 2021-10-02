import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@react95/core';
import './Styles/App.css';

import Taskbar from './Components/Taskbar';
import Desktop from './Components/Desktop';
import About from './Components/About';
import Contact from './Components/Contact';

const App = () => {
    return (
      <div className='App'>
          <ThemeProvider>
            <Desktop />
          </ThemeProvider>
      </div>
    )
  }

export default App;

