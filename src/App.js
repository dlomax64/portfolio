import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@react95/core';
import './Styles/App.css';

import Taskbar from './Components/Taskbar';
import Desktop from './Components/Desktop';
import About from './Components/About';
import Contact from './Components/Contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: ''
    }
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme(e) {
    this.setState({ theme: e.target.value });
  }

  render() {
    let { theme } = this.state;
    return (
      <div className='App'>
          <ThemeProvider theme={theme}>
            <Desktop changeTheme={this.changeTheme}/>
          </ThemeProvider>
      </div>
    )
  }
}

export default App;

