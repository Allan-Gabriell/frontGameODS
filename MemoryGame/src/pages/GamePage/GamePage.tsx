import React from "react";
import { useCardData } from "../../assets/hooks/useCardData";
import { useState, useEffect } from "react";
import type { CardInterface } from "../../assets/interface/CardInterface";
import GridCard from "../../assets/Components/Grid/GridCard";
import { BackgroundPage } from "./style";

const GamePage: React.FC = () => {
  const { data } = useCardData();
  const [cards, setCards] = useState<CardInterface[]>([]);

  useEffect(() => {
    if (data && cards.length === 0) {
      setCards(data);
    }
  }, [data]);

  return (
    <BackgroundPage>
      <GridCard cards={cards} />
    </BackgroundPage>
  );
};

export default GamePage;
