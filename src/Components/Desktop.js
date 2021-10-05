import { Component } from 'react';

import { Inetcpl1315 } from '@react95/icons/esm/react/Inetcpl1315';
import { FlyingWindows100 } from '@react95/icons/esm/react/FlyingWindows100';
import { Shell322 } from '@react95/icons/esm/react/Shell322';
import { User } from '@react95/icons/esm/react/User';
import { Pbrush1 } from '@react95/icons/esm/react/Pbrush1';
import { Sendmail2001 } from '@react95/icons/esm/react/Sendmail2001';

import Taskbar from './Taskbar';

import FirstName from '../Assets/FirstName.js';
import LastName from '../Assets/LastName.js';
import Title from '../Assets/Title.js';
import '../Styles/Desktop.css';

const Desktop = (props) => {
    console.log("Desktop rendered!");
    return (
      <div className="Desktop">
        <FirstName id="name" className="first" stroke="#fff"/>
        <LastName className="last" id="name" stroke="#fff"/>
        <Title id="name" className="title" stroke="#fff"/>
        <Taskbar changeTheme={props.changeTheme}/>
      </div>
    )
  }

export default Desktop;
