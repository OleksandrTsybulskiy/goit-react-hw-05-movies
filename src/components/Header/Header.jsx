import React from 'react';
import { Container, Nav, NavItemLink, NavList } from './Header.styled';

const Header = () => {
  return (
    <header>
      <Container>
        <Nav>
          <NavList>
            <li>
              <NavItemLink to='/'>Home</NavItemLink>
            </li>
            <li>
              <NavItemLink to='/movies'>Movies</NavItemLink>
            </li>
          </NavList>
        </Nav>
      </Container>
    </header>
  );
};

export default Header;
