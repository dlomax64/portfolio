import { Modal, Frame, TextArea } from '@react95/core';
import { InfoBubble } from '@react95/icons/esm/react/InfoBubble';

import about from '../Assets/about.js';
import '../Styles/About.css';

const About = (props) => (
  <Modal id='window'
    icon={<InfoBubble />}
    title='About'
    closeModal={props.closeAbout}
    width='auto'
    height='auto'
    menu={[
     { name: 'File', list:[], },
     { name: 'Edit', list:[], },
    ]}
  >
    <Frame height='100%' boxShadow='in' bg='white'>
    <TextArea 
      id='about'
      disabled
      rows={40} 
      cols={90}
      value={about} />
    </Frame>
  </Modal>
)

export default About;
