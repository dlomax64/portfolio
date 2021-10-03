import { Component } from 'react';

import Taskbar from './Taskbar';
import About from './About';
import ThemeWindow from './ThemeWindow';

import FirstName from '../Assets/FirstName.js';
import LastName from '../Assets/LastName.js';
import Title from '../Assets/Title.js';
import '../Styles/Desktop.css';


class Desktop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutIsOpen: false,
      contactIsOpen: false,
      themeIsOpen: false,
    }
    this.openWindow = this.openWindow.bind(this);
    this.closeWindow = this.closeWindow.bind(this);
  }

  openWindow(win) {
    let toOpen = win + 'IsOpen';
    this.setState({ [toOpen]: true });
  }

  closeWindow(win) {
    let toClose = win + 'IsOpen';
    this.setState({ [toClose]: false });
  }


  render() {
    let { aboutIsOpen, contactIsOpen, themeIsOpen } = this.state;
    console.log("Just rendered!");
    return (
      <div className="Desktop">
        {aboutIsOpen && <About closeWindow={this.closeWindow} />}
        {themeIsOpen && <ThemeWindow closeWindow={this.closeWindow} changeTheme={this.props.changeTheme} />}
        <Taskbar 
          openWindow = {this.openWindow}
        />
          <FirstName id="name" className="first" stroke="#fff"/>
          <LastName className="last" id="name" stroke="#fff"/>
          <Title id="name" className="title" stroke="#fff"/>
      </div>
    )
  }
}

export default Desktop;
