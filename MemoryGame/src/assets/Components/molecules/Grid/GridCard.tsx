import React, { useState } from "react";
import Card from "../../atoms/Card/Card";
import type { CardInterface } from "../../../interface/CardInterface";
import { GridContainer } from "./style";
import { useMovements } from "../../../hooks/useMovements";
import { usePlayerData } from "../../../hooks/usePLayerData";

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
  const [startTime] = useState(Date.now());

  const { sendMovement } = useMovements();
  const { data: player } = usePlayerData();

  const handleClick = (card: CardInterface, index: number) => {
    if (player && player.movements === 0) {
      alert("Não há movimentos possíveis. Fim de jogo.");
      return;
    }
    if (flipped.find((f) => f.index === index) || matchedIds.includes(card.id))
      return;

    const newFlipped = [...flipped, { index, id: card.id }];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      const isValid = first.id === second.id;

      if (isValid) {
        setMatchedIds((prev) => [...prev, first.id]);
      }

      const timeSecond = Math.floor((Date.now() - startTime) / 1000);

      sendMovement({ isActive: isValid, timeSecond });

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
