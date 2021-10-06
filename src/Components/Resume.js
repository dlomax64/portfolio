import { Modal, Frame, TextArea } from '@react95/core';
import { Shell322 } from '@react95/icons/esm/react/Shell322';

import resume from '../Assets/resume.js';
import pdf from '../Assets/lomax_dylan_CV.pdf';
import '../Styles/Resume.css';

const onClick = () => {
  let win = window.open(pdf, '_blank');
  win.focus();
}

const Resume = (props) => (
  <Modal id='window'
    icon={<Shell322 />}
    title='Resume'
    closeModal={props.closeResume}
    width='auto'
    height='auto'
    buttons={[
      { value: 'PDF', onClick: (e) => onClick(e, 'resume')}
    ]}
  >
    <Frame height='100%' boxShadow='in' bg='white'>
      <TextArea
        id='resume'
        disabled
        rows={40}
        cols={110}
        value={resume}
      />
    </Frame>
  </Modal>
)

export default Resume;
