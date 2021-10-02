import { Component } from 'react';
import { Modal, Frame } from '@react95/core';
import { InfoBubble } from '@react95/icons/esm/react/InfoBubble';
import '../Styles/About.css';

class About extends Component {
  constructor(props) {
    super(props);
  }

  AboutContent() {
    return (
      <div className='About'>
        <div id='about_page'>
          <h1> Hello, my name is Dylan Lomax </h1>
          <p> I am a senior Computer Science student at The University of Tennessee.
              I will graduate in May 2022 and am currently looking for a job post-graduation.
              I am most interested in Web Development.
          </p>
          <p><em><b>Please note that this site is still being built, this page is a placeholder.</b></em></p>
          <h3> Thanks for viewing my website! I am having a lot of fun building it! </h3>
        </div>
      </div>
    )
  }

  AboutWindow() {
    return (
      <Modal
        height='400'
        width='600'
        title='About'
        defaultPosition={{
          x:300,
          y:100,
        }}
        closeModal={() => this.props.closeWindow('about')}
        icon={<InfoBubble />}
        menu={[
          { name: 'File', list:[] },
          { name: 'Edit', list:[] },
          { name: 'Help', list:[] },
        ]}>
        <Frame height='100%' boxShadow='in' bg='white'>
          {this.AboutContent()}  
        </Frame>
      </Modal> 
    )
  }
  
  render() {
    return (
      <>
        {this.AboutWindow()}
      </>
    )
  }
}

export default About;
