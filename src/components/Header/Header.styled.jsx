import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 40px;
  max-width: 375px;
`;

export const Nav = styled.nav`
  padding: 30px 0;
  max-width: 100%;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

export const NavItemLink = styled(NavLink)`
  display: block;
  padding: 8px 14px;
  font-weight: 700;
  font-size: 22px;
  border-radius: 4px;
`;
