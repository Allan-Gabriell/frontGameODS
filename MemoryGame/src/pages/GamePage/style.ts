import styled from "styled-components";
import background from "../../assets/imgs/BackgroundGame.svg";

export const BackgroundPage = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const StyledGiveUpButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  background-color: #d32f2f;
  color: #fff;

  border: none;
  border-radius: 8px;
  padding: 10px 16px;

  font-weight: bold;
  cursor: pointer;

  z-index: 10;
`;