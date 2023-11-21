import styled from "styled-components";
import { Link, NavLink } from 'react-router-dom';

export const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  padding: 8px 14px;
  font-weight: 500;
  font-size: 18px;
  border-radius: 4px;
  border: none;
`;

export const Container = styled.div`
  margin: 20px 0;
  display: flex;
  gap: 10px;
`;

export const AddInfo = styled(NavLink)`
  display: inline-block;
  padding: 8px 14px;
  font-weight: 500;
  font-size: 18px;
  border-radius: 4px;
  border: none;
`;