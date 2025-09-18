import styled from "styled-components";
import background from "../../assets/imgs/Group 3.png";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const BackgroundPage = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackgroundPage2 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  
  img {
    width: 500px;
  }
`

export const StyledCard = styled(Card)`
  width: 500px;
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 15px !important;
`;

export const StyledInput = styled(TextField)`
  width: 100%;

  & .MuiOutlinedInput-root {
    border-radius: 15px;
  }

  & .MuiInputBase-input {
    text-align: center;
    font-size: 20px;
    padding: 12px;
  }

  & .MuiInputBase-input::placeholder {
    text-align: center;
  }
`;

export const StyledButton = styled(Button)`
  && {
    width: 100%;
    font-size: 20px;
    color: #ffffff;
    background-color: #333333;
    border-radius: 15px; 
    padding: 12px;
  }

  &&:hover {
    background-color: #4f4f4f;
  }
`;

export const StyleForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;
