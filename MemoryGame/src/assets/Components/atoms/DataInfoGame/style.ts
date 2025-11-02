import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import styled from "styled-components";

export const StyleDiv = styled(Card)`
  &.MuiPaper-root {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 30px;
    width: 100%;
    max-width: 400px;
    padding: 16px;

    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;


export const StyledBox1 = styled(Box)<{ bgColor?: string }>`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
  border-radius: 15px;
  padding: 10px;
  background-color: ${({ bgColor }) => bgColor || "rgba(255, 255, 255, 0.8)"};
`;

