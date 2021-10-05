import { TextArea } from '@react95/core';
import about from '../Assets/about.js';
import '../Styles/About.css';


const About = () => {
  return ( 
    <TextArea 
      id='about'
      disabled
      rows={40} 
      cols={55}
      value={about} />
  )
}

export default About;
