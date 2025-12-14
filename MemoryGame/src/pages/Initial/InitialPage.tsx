import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  BackgroundPage,
  StyledCard,
  StyledInput,
  StyledButton,
  StyleForm,
  BackgroundPage2,
} from "./style";

import LogoGame from "../../assets/imgs/LogoGame.svg";

import { usePlayerDataMutate } from "@/assets/hooks/usePlayerDataMutate";
import type { PlayerInterface } from "@/assets/interface/PlayerInterface";

import { InfoNotification } from "@/assets/Components/atoms/InfoNotification/InfoNotification";

const InitialPage: React.FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [nacionality, setNacionality] = useState("");

  const { mutate } = usePlayerDataMutate();

  const submit = () => {
    // ===============================
    // Validação frontend
    // ===============================
    if (!name.trim() || !nacionality.trim()) {
      InfoNotification(
        "error",
        "Por favor, informe o nome e a nacionalidade!"
      );
      return;
    }

    const playerData: PlayerInterface = {
      name: name.trim(),
      nacionality: nacionality.trim(),
    };

    // ===============================
    // Chamada backend
    // ===============================
    mutate(playerData, {
      onSuccess: () => {
        InfoNotification(
          "success",
          "Jogador criado com sucesso!"
        );
        navigate("/game-ods");
      },

      onError: (error: any) => {
        /**
         * Tratamento compatível com o retorno atual do Spring Boot
         */
        const backendMessage: string =
          error?.response?.data?.message || "";

        // Usuário já cadastrado
        if (
          backendMessage
            .toLowerCase()
            .includes("already exists")
        ) {
          InfoNotification(
            "warning",
            "Este jogador já está cadastrado!"
          );
          return;
        }

        // Erro genérico
        InfoNotification(
          "error",
          "Erro ao comunicar com o servidor. Tente novamente mais tarde."
        );
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

            <StyledButton
              variant="contained"
              onClick={submit}
            >
              Iniciar Game
            </StyledButton>
          </StyleForm>
        </StyledCard>
      </BackgroundPage2>
    </BackgroundPage>
  );
};

export default InitialPage;
