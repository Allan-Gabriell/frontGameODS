import type { PlayerInterface } from "./PlayerInterface";
import type { ScoreInterface } from "./ScoreInterface";

export interface PlayerWithScoreInterface extends PlayerInterface {
    score: ScoreInterface;
}