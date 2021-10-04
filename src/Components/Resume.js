import { Modal, Frame } from '@react95/core';
import { InfoBubble } from '@react95/icons/esm/react/InfoBubble';
import '../Styles/Resume.css';
import resume from '../Assets/resume.js';

const onClick = () => {
  var win = window.open('https://www.dropbox.com/s/da87txed4n69c1r/lomax_dylan_CV.pdf?dl=0', '_blank');
  win.focus();
}

const ResumeContent = () => {
    const document = resume;
    return (
      <div className='Resume'>
        <div id='about_page'>
          <textarea id='resume' disabled defaultValue={document}/>
        </div>
      </div>
    )
}

const ResumeWindow = (props)  => {
    return (
      <Modal style={{ fontSize: '.8em', overflowX: 'scroll'}}
        height='auto'
        width='auto'
        title='Resume'
        defaultPosition={{
          x:300,
          y:0,
        }}
        closeModal={() => props.closeWindow('resume')}
        icon={<InfoBubble />}
        buttons={[
          { value: 'PDF', onClick: () => onClick() }
        ]}
        menu={[
          { name: 'File', list:[] },
          { name: 'Edit', list:[] },
          { name: 'Help', list:[] },
        ]}>
        <Frame height='100%' boxShadow='in' bg='white'>
          {ResumeContent()}  
        </Frame>
      </Modal> 
    )
}
  
const Resume = (props) => {
    return (
      <>
        {ResumeWindow(props)}
      </>
    )
}

export default Resume;
