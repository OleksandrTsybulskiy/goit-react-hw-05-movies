import styled from "styled-components";
import { Link } from 'react-router-dom';

export const MovieListStyle = styled.ul`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

export const MovieItem = styled.li`
  flex-basis: calc((100% - 100px) / 5);
  height: 420px;
  border-radius: 8px;
  overflow: hidden;
`;

export const MovieLink = styled(Link)`
  object-fit: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MovieImg = styled.img`
  display: block;
  height: 330px;
  max-width: 100%;
  margin-bottom: 5px;
`;

export const MovieName = styled.p`
  display: block;
  height: auto;
  padding: 10px 8px;
  font-weight: 500;
  margin: auto;
  font-size: 8px;
  text-align: center;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;