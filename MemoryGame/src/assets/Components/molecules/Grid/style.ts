import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); 
  gap: 16px;
  padding: 20px;
  width: 100%;             
  max-width: 1200px;        
  margin: 0 auto;           
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
`;
