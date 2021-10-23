import { Component } from 'react';
import { ThemeProvider, GlobalStyle } from '@react95/core';
import './Styles/App.css';
import './Styles/Scanlines.scss';

import Desktop from './Components/Desktop';
import CRT from './Components/CRT';
import Scanlines from './Components/Scanlines';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(window.localStorage.getItem('state')) || {
      theme: ''
    }
    this.changeTheme = this.changeTheme.bind(this);
  }

  setState(state) {
    window.localStorage.setItem('state', JSON.stringify(state));
    super.setState(state);
  }

  changeTheme(e) {
    console.log(e.target);
    this.setState({ theme: e.target.value });
  }

  render() {
    let { theme } = this.state;
    return (
      <div className='App'>
        <div className='scanlines'>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Desktop changeTheme={this.changeTheme}/>
          </ThemeProvider>
        </div>
      </div>
    )
  }
}

export default App;
