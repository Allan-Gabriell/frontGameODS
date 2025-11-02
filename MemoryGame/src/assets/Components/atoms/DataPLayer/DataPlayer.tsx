import type { PlayerInterface } from "@/assets/interface/PlayerInterface";
import Avatar from "@mui/material/Avatar";
import type React from "react";
import { StyleDiv, StyleDiv2 } from "./style";

interface DataPlayerProp {
  player: PlayerInterface;
  time: string;
}

export const DataPlayer: React.FC<DataPlayerProp> = ({ player, time }) => {
  return (
    <StyleDiv>
      <Avatar sx={{ width: 70, height: 70 }} src="../src/assets/imgs/ilustracao-3d-de-avatar-ou-perfil-humano_23-2150671142.jpg">
        {player.name?.charAt(0).toUpperCase() || "?"}
      </Avatar>
      <StyleDiv2>
        <div>
          <p>
            <strong>{player.name}</strong>
          </p>
          <p>Movimentos: {player.movements}</p>
        </div>
        <div>
          <p>{player.score?.score}</p>
          <p>Tempo: {time}</p>
        </div>
      </StyleDiv2>
    </StyleDiv>
  );
};
