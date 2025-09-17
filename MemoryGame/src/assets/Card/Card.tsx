import React, { useState } from "react";
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
}
const Card: React.FC<CardComponentProps> = ({
  imgUrl,
  description,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <CardContainer onClick={handleClick}>
      <CardInner isFlipped={isFlipped}>
        <CardFront>
          <img src="/src/assets/imgs/iconODS.svg" alt="iconODS.svg" draggable="false" />
        </CardFront>
        <CardBack>
          <CardImage src={imgUrl} alt={description} draggable="false" />
        </CardBack>
      </CardInner>
    </CardContainer>
  );
};
export default Card;
