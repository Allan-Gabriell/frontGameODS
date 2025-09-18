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
`;
