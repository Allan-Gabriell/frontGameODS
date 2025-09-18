import React, { useState } from "react";
import Card from "../Card/Card";
import type { CardInterface } from "../../interface/CardInterface";
import { GridContainer } from "./style";

interface GridCardProps {
  cards: CardInterface[];
}

interface FlippedCard {
  index: number;
  id: number;
}

const GridCard: React.FC<GridCardProps> = ({ cards }) => {
  const [flipped, setFlipped] = useState<FlippedCard[]>([]);
  const [matchedIds, setMatchedIds] = useState<number[]>([]);

  const handleClick = (card: CardInterface, index: number) => {
    if (flipped.find((f) => f.index === index) || matchedIds.includes(card.id))
      return;

    const newFlipped = [...flipped, { index, id: card.id }];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;

      if (first.id === second.id) {
        setMatchedIds((prev) => [...prev, first.id]);
      }

      setTimeout(() => {
        setFlipped([]);
      }, 1000);
    }
  };

  return (
    <div>
      <GridContainer>
        {cards.map((card, index) => {
          const isFlipped =
            flipped.find((f) => f.index === index) ||
            matchedIds.includes(card.id);

          return (
            <Card
              key={index}
              imgUrl={card.imgUrl}
              description={card.description}
              flipped={!!isFlipped}
              onClick={() => handleClick(card, index)}
            />
          );
        })}
      </GridContainer>
    </div>
  );
};

export default GridCard;
