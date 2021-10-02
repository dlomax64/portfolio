import { Component } from 'react';
import { Modal, List, Frame } from '@react95/core';
import { InfoBubble } from '@react95/icons/esm/react/InfoBubble';

import Taskbar from './Taskbar';
import About from './About';

import FirstName from '../Assets/FirstName.js';
import LastName from '../Assets/LastName.js';
import Title from '../Assets/Title.js';
import '../Styles/Desktop.css';

class Desktop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutIsOpen: false,
      contactIsOpen: false
    }
    this.openWindow = this.openWindow.bind(this);
    this.closeWindow = this.closeWindow.bind(this);
  }

  openWindow(win) {
    let toOpen = win + 'IsOpen';
    //console.log(toOpen);
    this.setState({ [toOpen]: true });
  }

  closeWindow(win) {
    let toClose = win + 'IsOpen';
    this.setState({ [toClose]: false });
  }

  render() {
    let { aboutIsOpen, contactIsOpen } = this.state;
    console.log(aboutIsOpen);
    return (
      <div className="Desktop">
        {aboutIsOpen && (
          <Modal
            height='400'
            width='600'
            title='About'
            defaultPosition={{
              x:300,
              y:100,
            }}
            closeModal={() => this.closeWindow('about')}
            icon={<InfoBubble />}
            menu={[
              { name: 'File', list:[] },
              { name: 'Edit', list:[] },
              { name: 'Help', list:[] },
            ]}>
            <Frame
              bg='white'
              boxShadow='in'
              height='100%'
            >
              <About />
            </Frame>
          </Modal>
        )}
        <Taskbar 
          openWindow = {this.openWindow}
        />
        <div id="container">
          <FirstName id="name" className="first" stroke="#fff"/>
          <LastName className="last" id="name" stroke="#fff"/>
        </div>
        <div id="title_container">
          <Title id="title" stroke="#fff"/>
        </div>
      </div>
    )
  }
}

export default Desktop;
