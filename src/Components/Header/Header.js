import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Nav,
  NavLink,
  NavItem,
  Navbar,
  NavbarBrand,
  Container,
} from 'react-bootstrap';

  const Header = () => {
    return (
      <>
        <Navbar
          bg='dark'
          variant='dark'
        >
          <Container>
            <NavbarBrand href='/'>Dylan Lomax</NavbarBrand>
              <Nav className='me-auto'>
                <NavItem> {/* ABOUT ME */}
                  <NavLink href='about'>
                    <span className='nav-link-inner--text'>About Me</span>
                  </NavLink>
                </NavItem>
                <NavItem> {/* CONTACT */}
                  <NavLink href='contact'> 
                    <span className='nav-link-inner--text'>Contact</span>
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav>
                <NavItem> {/* GITHUB */}
                  <NavLink href='https://www.github.com/dlomax64' target='_blank'>
                    {/*<FontAwesomeIcon icon={["fab", "github"]}/>*/}
                    GitHub
                  </NavLink>
                </NavItem>
                <NavItem> {/* LINKEDIN */}
                  <NavLink href='https://www.linkedin.com/in/dlomax/' target='_blank'>LinkedIn</NavLink>
                </NavItem>
              </Nav>
          </Container>
        </Navbar>
      </>
    )
  }

export default Header;
