import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;     
  aspect-ratio: 1 / 1;     
  max-width: 175px;    
  border-radius: 20px;
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardFront = styled(CardSide)`
  background-color: #c7e9ff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
    height: auto;
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
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
