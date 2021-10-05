import { TextArea } from '@react95/core';
import resume from '../Assets/resume.js';
import '../Styles/Resume.css';

const Resume = () => {
  return (
    <TextArea
      id='resume'
      disabled
      rows={40}
      cols={103}
      value={resume}
    />
  )
}

export default Resume;
