import { UserData } from "./users-data.entity";
import { Game } from "./game.entity";
import { TGameRequestStatus } from "./types";
export declare class GameRequest {
    id: string;
    toId: string;
    to: UserData;
    fromId: string;
    from: UserData;
    gameId: string;
    game: Game;
    status: TGameRequestStatus;
    note: string;
    logCreate(): void;
    logUpdate(): void;
    logRemove(): void;
}
