import React from "react";
import { useCardData } from "../../assets/hooks/useCardData";
import GridCard from "../../assets/Components/molecules/Grid/GridCard";
import { BackgroundPage } from "./style";
import { DataInfoGame } from "@/assets/Components/atoms/DataInfoGame/DataInfoGame";
import { useRaking } from "@/assets/hooks/useRanking";
import { usePlayerData } from "@/assets/hooks/usePLayerData";

const GamePage: React.FC = () => {
  const { data: cardData } = useCardData();
  const { data: dataRanking } = useRaking();
  const { data: currentPlayer } = usePlayerData();

  return (
    <BackgroundPage>
      <GridCard cards={cardData || []} />
      <DataInfoGame players={dataRanking || []} currentPlayer={currentPlayer} />
    </BackgroundPage>
  );
};

export default GamePage;
