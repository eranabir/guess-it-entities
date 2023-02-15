import { Game } from "../game";
export declare class UserData {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    provider: 'google' | 'email' | 'facebook';
    vaultAccountId: string;
    wins: number;
    userId: string;
    activeGame: Game;
    profilePic: string;
    logCreate(): void;
    logUpdate(): void;
    logRemove(): void;
}
