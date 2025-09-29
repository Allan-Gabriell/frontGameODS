import React from "react";
import {
  CardContainer,
  CardInner,
  CardFront,
  CardBack,
  CardImage,
} from "./style";

interface CardComponentProps {
  imgUrl: string;
  description: string;
  flipped: boolean; // controlado pelo GridCard
  onClick: () => void;
}

const Card: React.FC<CardComponentProps> = ({
  imgUrl,
  description,
  flipped,
  onClick
}) => {
  return (
    <CardContainer onClick={onClick}>
      <CardInner isFlipped={flipped}>
        <CardFront>
          <img
            src="/src/assets/imgs/iconODS.svg"
            alt="iconODS.svg"
            draggable="false"
          />
        </CardFront>
        <CardBack>
          <CardImage src={imgUrl} alt={description} draggable="false" />
        </CardBack>
      </CardInner>
    </CardContainer>
  );
};

export default Card;
