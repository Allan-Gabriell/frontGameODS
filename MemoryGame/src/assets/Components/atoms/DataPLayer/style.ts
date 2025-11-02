import styled from "styled-components";

export const StyleDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(240, 240, 255, 0.9);
  color: black;
  gap: 16px;
  padding: 12px 20px;
  border-radius: 16px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  p {
    margin: 0;
    font-size: 15px;
    line-height: 1.3;
  }

  strong {
    font-size: 17px;
    color: rgba(100, 100, 100, 0.9);
  }
`;

export const StyleDiv2 = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  p:last-child {
    font-size: 14px;
    color: black;
  }
`;
