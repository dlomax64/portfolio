import { Component } from 'react';
import { 
  Modal,
  List, 
  Frame, 
  Dropdown, 
  Fieldset,
  Button
} from '@react95/core';

import { InfoBubble } from '@react95/icons/esm/react/InfoBubble';
import { Pbrush1 } from '@react95/icons/esm/react/Pbrush1';

import Taskbar from './Taskbar';
import About from './About';

import FirstName from '../Assets/FirstName.js';
import LastName from '../Assets/LastName.js';
import Title from '../Assets/Title.js';
import '../Styles/Desktop.css';

const themeOptions = [
  '',
  'win95',
  'counterStrike',
  'bee',
  'pamelaAnderson',
  'azureOrange',
  'olive',
  'vaporTeal',
  'matrix',
  'vermillion',
  'tooSexy',
  'ninjaTurtles',
  'tokyoDark',
  'molecule',
  'travel',
  'theSixtiesUSA',
  'candy',
  'modernDark',
  'storm',
  'millenium',
  'spruce',
  'slate',
  'rose',
  'rainyDay',
  'plum',
  'marine',
  'maple',
  'lilac',
  'blackAndWhite',
  'highContrast',
  'eggplant',
  'brick',
  'water',
  'coldGray',
  'lilacRoseDark',
  'violetDark'
];

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
        {themeIsOpen && (

          <Modal
            height='150'
            width='225'
            title='Change Theme'
            defaultPosition={{
              x:300,
              y:100,
            }}
            closeModal={() => this.closeWindow('theme')}
            icon={<Pbrush1 />}
            buttons={[
              { value: 'OK', onClick: () => this.closeWindow('theme') }
            ]}
          >
          <div style={{ padding: '2.5px' }} />
          <Fieldset legend="Pick a theme" style={{ marginBottom: '1.6em', color: 'black', height: 50 }}>
            <Dropdown style={{ width: 200 }} options={themeOptions} onChange={(e) => this.props.changeTheme(e)}/>
          </Fieldset>
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
