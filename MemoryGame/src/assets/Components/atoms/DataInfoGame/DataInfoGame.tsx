import type React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import type { PlayerInterface } from "@/assets/interface/PlayerInterface";
import type { PlayerWithScoreInterface } from "@/assets/interface/PlayerWithScoreInterface";
import { DataPlayer } from "../DataPLayer/DataPlayer";
import { useEffect, useState, useMemo, useRef } from "react";
import { StyledBox1, StyleDiv } from "./style";

// Importando imagens
import img1 from "@/assets/imgs/ilustracao-3d-com-avatar-on-line_23-2151303097.jpg";
import img2 from "@/assets/imgs/ilustracao-3d-de-avatar-ou-perfil-humano_23-2150671116.jpg";
import img3 from "@/assets/imgs/ilustracao-3d-de-avatar-ou-perfil-humano_23-2150671124.jpg";
import img4 from "@/assets/imgs/ilustracao-3d-de-avatar-ou-perfil-humano_23-2150671142.jpg";
import img5 from "@/assets/imgs/renderizacao-3d-do-estilo-de-cabelo-para-o-design-do-avatar_23-2151869153.jpg";

interface DataInfoGameProps {
  players?: PlayerWithScoreInterface[];
  currentPlayer?: PlayerInterface;
}

export const DataInfoGame: React.FC<DataInfoGameProps> = ({ players = [], currentPlayer }) => {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const prevMovements = useRef<number | undefined>(undefined);

  const avatarImages = [img1, img2, img3, img4, img5];

  const playerAvatars = useMemo(() => {
    const map: Record<string, string> = {};
    players.forEach((player) => {
      const randomIndex = Math.floor(Math.random() * avatarImages.length);
      map[player.id ?? player.name ?? Math.random().toString()] = avatarImages[randomIndex];
    });
    return map;
  }, [players]);

  useEffect(() => {
    const currentMovements = currentPlayer?.movements;

    if (
      prevMovements.current === 0 &&
      typeof currentMovements === "number" &&
      currentMovements > 0
    ) {
      setSecondsElapsed(0);
    }

    prevMovements.current = currentMovements;

    let timer: NodeJS.Timeout | undefined;

    if (typeof currentMovements === "number" && currentMovements > 0) {
      timer = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [currentPlayer]);

  const minutes = Math.floor(secondsElapsed / 60);
  const seconds = secondsElapsed % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  const topPlayers = [...players]
    .sort((a, b) => (b.score?.score ?? 0) - (a.score?.score ?? 0))
    .slice(0, 5);

  const getMedalColor = (index: number) => {
    switch (index) {
      case 0:
        return "#FFD700";
      case 1:
        return "#C0C0C0"; 
      case 2:
        return "#CD7F32";
      default:
        return "rgba(255, 255, 255, 0.8)"; 
    }
  };

  return (
    <StyleDiv>
      {currentPlayer && <DataPlayer player={currentPlayer} time={formattedTime} />}
      <Stack spacing={2}>
        {topPlayers.map((playerItem, index) => (
          <StyledBox1 key={playerItem.id ?? index} bgColor={getMedalColor(index)}>
            <Avatar
              src={playerAvatars[playerItem.id ?? playerItem.name ?? index]}
              alt={playerItem.name}
              sx={{ width: 56, height: 56 }}
            />
            <Box>
              <p>{playerItem.name}</p>
              <p>Score: {playerItem.score?.score ?? 0}</p>
            </Box>
          </StyledBox1>
        ))}
      </Stack>
    </StyleDiv>
  );
};

