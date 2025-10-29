import React, { useState, useEffect } from "react";
import { useCardData } from "../../assets/hooks/useCardData";
import type { CardInterface } from "../../assets/interface/CardInterface";
import GridCard from "../../assets/Components/molecules/Grid/GridCard";
import { BackgroundPage } from "./style";
import { DataInfoGame } from "@/assets/Components/atoms/DataInfoGame/DataInfoGame";
import { useRaking } from "@/assets/hooks/useRanking";
import type { PlayerWithScoreInterface } from "@/assets/interface/PlayerWithScoreInterface";

const GamePage: React.FC = () => {
  const { data: cardData } = useCardData();
  const { data: dataRanking } = useRaking();

  const [cards, setCards] = useState<CardInterface[]>([]);
  const [ranking, setRanking] = useState<PlayerWithScoreInterface[]>([]);

  useEffect(() => {
    if (cardData && cards.length === 0) setCards(cardData);
    if (dataRanking && ranking.length === 0) setRanking(dataRanking);
  }, [cardData, dataRanking]);

  return (
    <BackgroundPage>
      <GridCard cards={cards} />
      <DataInfoGame players={ranking} />
    </BackgroundPage>
  );
};

export default GamePage;
