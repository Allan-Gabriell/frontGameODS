import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCardData } from "../../assets/hooks/useCardData";
import GridCard from "../../assets/Components/molecules/Grid/GridCard";
import { BackgroundPage, StyledGiveUpButton } from "./style";
import { DataInfoGame } from "@/assets/Components/atoms/DataInfoGame/DataInfoGame";
import { useRaking } from "@/assets/hooks/useRanking";
import { usePlayerData } from "@/assets/hooks/usePLayerData";
import { useMovements } from "@/assets/hooks/useMovements";
import GiveUpModal from "@/assets/Components/atoms/GiveUpModal/GiveUpModal";
import { InfoNotification } from "@/assets/Components/atoms/InfoNotification/InfoNotification";

const GamePage: React.FC = () => {
  const navigate = useNavigate();

  const { data: cardData } = useCardData();
  const { data: dataRanking } = useRaking();
  const { data: currentPlayer } = usePlayerData();
  const { sendMovement } = useMovements();

  const [showGiveUpModal, setShowGiveUpModal] = useState(false);

  const handleConfirmGiveUp = () => {
    sendMovement(
      { isActive: false, timeSecond: 0 },
      {
        onSuccess: () => {
          InfoNotification("info", "Você desistiu da partida.");
          navigate("/");
        },
        onError: () => {
          InfoNotification("error", "Erro ao desistir da partida.");
        },
      }
    );
  };

  return (
    <BackgroundPage>
      <StyledGiveUpButton onClick={() => setShowGiveUpModal(true)}>
        Desistir
      </StyledGiveUpButton>

      <GridCard cards={cardData || []} />

      <DataInfoGame
        players={dataRanking || []}
        currentPlayer={currentPlayer}
        paused={showGiveUpModal}
      />

      <GiveUpModal
        open={showGiveUpModal}
        onCancel={() => setShowGiveUpModal(false)}
        onConfirm={handleConfirmGiveUp}
      />
    </BackgroundPage>
  );
};

export default GamePage;
