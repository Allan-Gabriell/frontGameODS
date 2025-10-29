import type React from "react";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import type { PlayerWithScoreInterface } from "@/assets/interface/PlayerWithScoreInterface";

interface DataInfoGameProps {
  players?: PlayerWithScoreInterface[];
}

export const DataInfoGame: React.FC<DataInfoGameProps> = ({ players = [] }) => {
  const topPlayers = [...players]
    .sort((a, b) => (b.score?.score ?? 0) - (a.score?.score ?? 0))
    .slice(0, 5);

  return (
    <Card>
      <Stack>
        {topPlayers.map((player, index) => (
          <Box key={player.id ?? index}>
            <Avatar></Avatar>
            <Box>
              <Typography
                variant="body1"
                sx={{ fontWeight: index === 0 ? "bold" : "normal" }}
              >
                {index + 1}. {player.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Pontuação: {player.score?.score ?? 0}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Card>
  );
};
