import { Game } from "../game/game.entity";
import { UserData } from "../user-data/users-data.entity";
export declare class Player {
    id: string;
    gameId: string;
    game: Game;
    userId: string;
    user: UserData;
    status: string;
    team: string;
    round: number;
    isAdmin: boolean;
    logCreate(): void;
    logUpdate(): void;
    logRemove(): void;
}
