import { IWord } from "../word";
export type TGameStatus = 'CREATED' | 'INITIALIZED' | 'PAUSED' | 'PLAYING' | 'START_NEXT_ROUND' | 'ENDED';
export type TGameRequestStatus = 'PENDING' | 'REJECTED';
export interface IGameWord extends IWord {
    team: 'A' | 'B';
    round: 1 | 2 | 3;
}
