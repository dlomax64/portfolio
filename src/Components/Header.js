import React from 'react';
//import { NavHashLink as Link } from 'react-router-hash-link';
import { Link, animateScroll as scroll } from 'react-scroll';
import {
  Navbar,
  Nav,
} from 'react-bootstrap';

import '../Styles/Header.css';

const Header = () => {
  return (
      <div>
        <Navbar
          bg='navbar'
          variant='dark'
          collapseOnSelect
          expand="sm"
        >
            <Navbar.Brand id='brand'> D L </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' /> 
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='ms-auto'>
                <Link
                  activeClass='active'
                  to='#home'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className='nav-link'
                >
                  Home
                </Link>

                <Link
                  activeClass='active'
                  to='#about'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className='nav-link'
                >
                  About
                </Link>

                <Link
                  activeClass='active'
                  to='#contact'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className='nav-link'
                >
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </div>
  );
}

export default Header;

  /* this was a much more conplex solution to highlighting tabs than needed
  componentDidMount() {
    let url = window.location.href.split('/');
    console.log(url);
    let curPage = url[3];
    console.log(curPage);
    if(curPage) {
      console.log("Changing tab highlight to " + curPage);
      this.setState({ curPage: curPage });
    }
  }

  shouldComponentUpdate() {
    console.log(this.state.curPage);
    return true;
  }
  */

  /* Gonna try to just make a custom header
  render() {
    let curPage = this.state.curPage;
    console.log("The current page is set to " + curPage);
    return (
    )
  }



  */
