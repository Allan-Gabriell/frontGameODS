import type { PlayerInterface } from "@/assets/interface/PlayerInterface";
import Avatar from "@mui/material/Avatar";
import type React from "react";

interface DataPlayerProp {
  player: PlayerInterface;
  time: string;
}

export const DataPlayer: React.FC<DataPlayerProp> = ({ player, time }) => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px",
      padding: "10px"
    }}>
      <Avatar>{player.name?.charAt(0).toUpperCase() || "?"}</Avatar>
      <p><strong>{player.name}</strong></p>
      <p>{player.score?.score}</p>
      <p>Movimentos: {player.movements}</p>
      <p>⏱️ Tempo: {time}</p>
    </div>
  );
};
