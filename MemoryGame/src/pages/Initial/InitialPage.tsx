import type React from "react";
import {
  BackgroundPage,
  StyledCard,
  StyledInput,
  StyledButton,
  StyleForm,
  BackgroundPage2,
} from "./style";
import { useNavigate } from "react-router-dom";
import LogoGame from "../../assets/imgs/LogoGame.svg";
import { useState } from "react";
import { usePlayerDataMutate } from "@/assets/hooks/usePlayerDataMutate";
import type { PlayerInterface } from "@/assets/interface/PlayerInterface";
import { InfoNotification } from "@/assets/Components/InfoNotification/InfoNotification";

const InitialPage: React.FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [nacionality, setNacionality] = useState("");
  const { mutate } = usePlayerDataMutate();

  const submit = () => {
    if (!name.trim() || !nacionality.trim()) {
      InfoNotification('error', 'Por favor, informe o nome e a nacionalidade!');
      return;
    }

    const playerData: PlayerInterface = {
      name: name.trim(),
      nacionality: nacionality.trim(),
    };

    mutate(playerData, {
      onSuccess: () => {
        navigate("/game-ods");
      },
    });
  };

  return (
    <BackgroundPage>
      <BackgroundPage2>
        <img src={LogoGame} alt="Logo game" />
        <StyledCard>
          <StyleForm>
            <StyledInput
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <StyledInput
              placeholder="Nacionalidade"
              value={nacionality}
              onChange={(e) => setNacionality(e.target.value)}
            />
            <StyledButton variant="contained" onClick={submit}>
              Iniciar Game
            </StyledButton>
          </StyleForm>
        </StyledCard>
      </BackgroundPage2>
    </BackgroundPage>
  );
};

export default InitialPage;
