import { UserData } from "../user-data";
import { Game, TGameRequestStatus } from "../game";
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
