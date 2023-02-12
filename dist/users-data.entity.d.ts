import { Game } from "./game/game.entity";
export declare class UserData {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    provider: 'google' | 'email' | 'facebook';
    userId: string;
    activeGame: Game;
    profilePic: string;
    logCreate(): void;
    logUpdate(): void;
    logRemove(): void;
}
