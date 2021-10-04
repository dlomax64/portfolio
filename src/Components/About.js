import { Modal, Frame } from '@react95/core';
import { InfoBubble } from '@react95/icons/esm/react/InfoBubble';
import about from '../Assets/about.js';
import '../Styles/About.css';


const AboutContent = () => {
    const document = about;
    return (
      <div className='About'>
        <div id='about_page'>
          <textarea id='about' disabled defaultValue={document} />
        </div>
      </div>
    )
}

const AboutWindow = (props)  => {
    return (
      <Modal style={{ fontSize: '.8em', overflowX: 'scroll'}}
        height='auto'
        width='auto'
        title='About'
        defaultPosition={{
          x:300,
          y:100,
        }}
        closeModal={() => props.closeWindow('about')}
        icon={<InfoBubble />}
        menu={[
          { name: 'File', list:[] },
          { name: 'Edit', list:[] },
          { name: 'Help', list:[] },
        ]}>
        <Frame height='100%' boxShadow='in' bg='white'>
          {AboutContent()}  
        </Frame>
      </Modal> 
    )
}
  
const About = (props) => {
    return (
      <>
        {AboutWindow(props)}
      </>
    )
}

export default About;
