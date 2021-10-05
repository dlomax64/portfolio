import React from 'react';
import styled from '@xstyled/styled-components';
import { 
  TaskBar, 
  List,
  Modal,
  Frame,
  Fieldset,
  Dropdown
} from '@react95/core';

import About from './About';
import Resume from './Resume';
import VideoPlayer from './VideoPlayer';
import themeOptions from '../Assets/themeOptions';
import '../Styles/Taskbar.css'

import { Inetcpl1315 } from '@react95/icons/esm/react/Inetcpl1315';
import { FlyingWindows100 } from '@react95/icons/esm/react/FlyingWindows100';
import { Shell322 } from '@react95/icons/esm/react/Shell322';
import { User } from '@react95/icons/esm/react/User';
import { Pbrush1 } from '@react95/icons/esm/react/Pbrush1';
import { Sendmail2001 } from '@react95/icons/esm/react/Sendmail2001';
import { InfoBubble } from '@react95/icons/esm/react/InfoBubble';
import { RecycleFull } from '@react95/icons/esm/react/RecycleFull';
import { FileText } from '@react95/icons/esm/react/FileText';

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
  const [recycleIsOpen, toggleRecycle] = React.useState(false);
  const [videoPlayer, toggleVideo] = React.useState(false);

  const closeAbout = () => toggleAbout(false);
  const closeResume = () => toggleResume(false);
  const closeTheme = () => toggleTheme(false);
  const closeRecycle = () => toggleRecycle(false);
  const closeVideo = () => toggleVideo(false);

  const onClick = (e, link) => {
    e.preventDefault();

    if(link === 'mail' ) {
      var mail = document.createElement('a');
      mail.href = 'mailto:dylan@dlomax.net';
      mail.click();
    }
      
    else {
      var win = window.open(link, '_blank'); 
      win.focus();
    }
  }
	console.log(videoPlayer);

  return( 
    <>
    {aboutIsOpen && (
      <Modal id='window'
      icon={<InfoBubble />}
      title='About'
      closeModal={closeAbout}
      width='auto'
      height='auto'
				menu={[
            { name: 'File', list:[], },
            { name: 'Edit', list:[], },
          ]}
        > 
          <Frame height='100%' boxShadow='in' bg='white'>
            <About />
          </Frame>
        </Modal>
      )}

      {resumeIsOpen && (
        <Modal id='window'
          icon={<InfoBubble />}
          title='Resume'
          closeModal={closeResume}
          width='auto'
          height='auto'
          buttons={[
            { value: 'PDF', onClick: (e) => onClick(e, 'https://www.dropbox.com/s/da87txed4n69c1r/lomax_dylan_CV.pdf?dl=0')}
          ]}
        > 
          <Frame height='100%' boxShadow='in' bg='white'>
            <Resume />
          </Frame>
        </Modal>
      )}

      {themeIsOpen && (
        <Modal id='window'
          icon={<InfoBubble />}
          title='Theme'
          closeModal={closeTheme}
          width='auto'
          height='auto'
          buttons={[
            { value: 'OK', onClick: closeTheme}
          ]}
        > 
            <Fieldset legend='Pick a theme' style={{ marginBottom: '1.6em', width: 205, color: 'black' }}>
              <Dropdown
								style={{ width: 200 }}
                options={themeOptions}
                onChange={(e) => props.changeTheme(e)}
              />
            </Fieldset>
        </Modal>
      )}

      {recycleIsOpen && (
        <Modal id='window'
          icon={<RecycleFull />}
          title='Recycle Bin'
          closeModal={closeRecycle}
          width='auto'
          height='auto'
          buttons={[
            { value: 'OK', onClick: () => toggleVideo(true) } 
          ]}
        > 
          <Frame height='100%' boxShadow='in' bg='white'>
						<IconContainer onClick={() => toggleVideo(true)} >
							<FileText variant='32x32_4' />
							<p><b>SSN.txt</b></p>
						</IconContainer>
          </Frame>
        </Modal>
      )}

			{videoPlayer && (
        <Modal id='window'
          icon={<RecycleFull />}
          title='Recycle Bin'
          closeModal={closeVideo}
          width='auto'
          height='auto'
        > 
					<VideoPlayer />
        </Modal>
      )}

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
				<IconContainer onClick={toggleTheme}>
					<Pbrush1 variant='32x32_4'/>
					<p style={{ color: 'white', fontSize: '1.1em' }}><b>Themes</b></p>
				</IconContainer>
			</div>
			<div>
				<IconContainer >
					<RecycleFull variant='32x32_4'/>
					<p style={{ color: 'white', fontSize: '1.1em' }}><b>Recycle Bin</b></p>
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
