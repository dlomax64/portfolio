import React from 'react';
import styled from '@xstyled/styled-components';
import { TaskBar, List } from '@react95/core';

import About from './About';
import Resume from './Resume';
import Theme from './Theme';
import Minesweeper from './Minesweeper';
import '../Styles/Taskbar.css'

import { Inetcpl1315 } from '@react95/icons/esm/react/Inetcpl1315';
import { FlyingWindows100 } from '@react95/icons/esm/react/FlyingWindows100';
import { Shell322 } from '@react95/icons/esm/react/Shell322';
import { Pbrush1 } from '@react95/icons/esm/react/Pbrush1';
import { Sendmail2001 } from '@react95/icons/esm/react/Sendmail2001';
import { InfoBubble } from '@react95/icons/esm/react/InfoBubble';
import { Joy102 } from '@react95/icons/esm/react/Joy102';

const IconContainer = styled.button`
display: inline-flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 25;
min-width: 150px;
  border: none;
  background-color: transparent;

  i,
  :hover {
    cursor: pointer;
  }

  i {
    margin-bottom: 8;
  }

  :hover {
    box-shadow: out;
  }
`;

const Taskbar = (props) => {
  const [aboutIsOpen, toggleAbout] = React.useState(false);
  const [resumeIsOpen, toggleResume] = React.useState(false);
  const [themeIsOpen, toggleTheme] = React.useState(false);
  const [minesweeperIsOpen, toggleMinesweeper] = React.useState(false);

  const closeAbout = () => toggleAbout(false);
  const closeResume = () => toggleResume(false);
  const closeTheme = () => toggleTheme(false);
  const closeMinesweeper = () => toggleMinesweeper(false);

  const onClick = (e, link) => {
    e.preventDefault();

    if(link === 'mail' ) {
      var mail = document.createElement('a');
      mail.href = 'mailto:dylan@dlomax.net';
      mail.click();
    } else {
      let win = window.open(link, '_blank'); 
      win.focus();
    }
  }

  return( 
    <>
      {aboutIsOpen && <About closeAbout={closeAbout} />} 
      {resumeIsOpen && <Resume closeResume={closeResume} />}
      {themeIsOpen && <Theme closeTheme={closeTheme} changeTheme={props.changeTheme} />}
      {minesweeperIsOpen && <Minesweeper closeMinesweeper={closeMinesweeper} />}

			<div>
				<IconContainer onClick={toggleAbout}>
					<InfoBubble variant='32x32_4'/>
					<p style={{ color: 'white', fontSize: '1.1em' }}><b>About</b></p>
				</IconContainer>
			</div>
			<div>
				<IconContainer onClick={toggleResume}>
					<Shell322 variant='32x32_4'/>
					<p style={{ color: 'white', fontSize: '1.1em' }}><b>Resume</b></p>
				</IconContainer>
			</div>
			<div>
				<IconContainer onClick={toggleMinesweeper}>
					<Joy102 variant='32x32_4'/>
					<p style={{ color: 'white', fontSize: '1.1em' }}><b>Minesweeper</b></p>
				</IconContainer>
			</div>
			<div>
				<IconContainer onClick={toggleTheme}>
					<Pbrush1 variant='32x32_4'/>
					<p style={{ color: 'white', fontSize: '1.1em' }}><b>Themes</b></p>
				</IconContainer>
			</div>
			<div id='taskbar'>
				<TaskBar 
					list={
						<List>
							<List.Item icon={<Sendmail2001 variant="32x32_4" />} onClick={(e) => onClick(e, 'mail')}>
					    		Contact 
							</List.Item>
							<List.Item icon={<Shell322 variant="32x32_4" />} onClick={() => toggleResume(true)}>
					  		Resume 
							</List.Item>
							<List.Item icon={<InfoBubble variant="32x32_4" />} onClick={() => toggleAbout(true)}>
					  		About 
							</List.Item>
							<List.Item icon={<Inetcpl1315 />} onClick={(e) => onClick(e, 'https://github.com/dlomax64')}>
								Github
							</List.Item>
							<List.Item icon={<FlyingWindows100 variant="32x32_4" />} onClick={(e) => onClick(e, 'https://linkedin.com/in/dlomax')}>
					  		Linkedin
							</List.Item>
          		<List.Divider />
							<List.Item icon={<Joy102 variant="32x32_4" />} onClick={() => toggleMinesweeper(true)}>
					  		Minesweeper
							</List.Item>
							<List.Item icon={<Pbrush1 variant="32x32_4" />} onClick={() => toggleTheme(true)}>
					  		Themes 
							</List.Item>
						</List>
					}
				/>
			</div>
    </>
	)
}

export default Taskbar;
