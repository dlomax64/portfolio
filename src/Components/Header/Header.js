import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Nav,
  Link,
  Navbar,
  Container,
} from 'react-bootstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curPage: 'home'
    }
  }

  componentDidMount() {
    let curPage = window.location.href.split('/');
    console.log(curPage);
    this.setState({ curPage: curPage[4] });
  }

  shouldComponentUpdate() {
    console.log(this.state.curPage);
    return true;
  }

  render() {
    return (
      <>
        <Navbar
          bg='dark'
          variant='dark'
          collapseOnSelect
          expand="lg"
        >
          <Container>
            <Navbar.Brand href='/'>Dylan Lomax</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
              <Nav className='me-auto'>
                  <Nav.Link href='/'>
                    <span className='nav-link-inner--text'>Home</span>
                  </Nav.Link>
                  <Nav.Link href='about'>
                    <span className='nav-link-inner--text'>About Me</span>
                  </Nav.Link>
                  <Nav.Link href='contact'> 
                    <span className='nav-link-inner--text'>Contact</span>
                  </Nav.Link>
              </Nav>
              <Nav>
                  <Nav.Link href='https://www.github.com/dlomax64' target='_blank'>
                    {/*<FontAwesomeIcon icon={["fab", "github"]}/>*/}
                    GitHub
                  </Nav.Link>
                  <Nav.Link href='https://www.linkedin.com/in/dlomax/' target='_blank'>
                    LinkedIn
                  </Nav.Link>
              </Nav>
          </Container>
        </Navbar>
      </>
    )
  }
}

export default Header;
