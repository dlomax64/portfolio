import React from 'react';
import {
  Nav,
  NavLink,
  NavItem,
  Navbar,
  NavbarBrand,
  Container,
} from 'reactstrap';

  const Header = () => {
    return (
      <>
        <Navbar
          className='navbar-top navbar-horizontal navbar-dark'
          expand='md'
        >
          <Container>
            <NavbarBrand>Dylan Lomax</NavbarBrand>
              <Nav className='me-auto'>
                <NavItem> {/* ABOUT ME */}
                  <NavLink>
                    <span className='nav-link-inner--text'>About Me</span>
                  </NavLink>
                </NavItem>
                <NavItem> {/* CONTACT */}
                  <NavLink> 
                    <span className='nav-link-inner--text'>Contact</span>
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav>
                <NavItem> {/* GITHUB */}
                  <NavLink href='https://github.com/dlomax64'>GitHub</NavLink>
                </NavItem>
                <NavItem> {/* LINKEDIN */}
                  <NavLink>LinkedIn</NavLink>
                </NavItem>
              </Nav>
          </Container>
        </Navbar>
      </>
    )
  }

export default Header;
