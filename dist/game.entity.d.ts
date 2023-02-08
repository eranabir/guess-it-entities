import { IGameWord, IWord, TGameStatus } from "./types";
import { Player } from "./player.entity";
export declare class Game {
    id: string;
    adminId: string;
    title: string;
    words: IWord[];
    categories: string[];
    activeTeam: 'A' | 'B';
    activeRound: 1 | 2 | 3;
    activePlayerId: string;
    activeWord: IWord;
    status: TGameStatus;
    difficulty: 'EASY' | 'MEDIUM' | 'HARD';
    timer: number;
    correctWords: IGameWord[];
    skippedWords: IGameWord[];
    players: Player[];
    mode: 'singleplayer' | 'multiplayer';
    winTeam: 'A' | 'B';
    logCreate(): void;
    logUpdate(): void;
    logRemove(): void;
}
