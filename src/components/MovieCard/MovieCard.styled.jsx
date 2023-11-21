import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 40px;
`;

export const Img = styled.img`
  width: 150px;
  height: auto;
  border-radius: 4px;
 
`;

export const Title = styled.h2`
  
  font-weight: 700;
  font-size: 20px;
  
`;

export const Year = styled.span`
  font-weight: 700;
  
`;

export const Description = styled.p`
 
  font-size: 16px;
  font-weight: 500;
`;

export const Text = styled.span`
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.05em;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;