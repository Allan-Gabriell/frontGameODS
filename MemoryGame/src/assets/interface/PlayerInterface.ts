import type { ScoreInterface } from "./ScoreInterface";

export interface PlayerInterface {
    id?: number;
    name: string;
    nacionality: string;
    movements?: number;
    score?: ScoreInterface;
  }