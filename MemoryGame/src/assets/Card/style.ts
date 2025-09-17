import styled from "styled-components";

export const CardContainer = styled.div`
  width: 175px;
  height: 175px;
`;

export const CardInner = styled.div<{ isFlipped: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${(props) =>
    props.isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 20px;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardFront = styled(CardSide)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c7e9ff;
  color: white;

  img {
    width: 121px;
  }
`;

export const CardBack = styled(CardSide)`
  color: white;
  transform: rotateY(180deg);
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;
