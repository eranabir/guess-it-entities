import { TFriendStatus } from "./types";
import { UserData } from "./users-data.entity";
export declare class Friend {
    id: string;
    userId: string;
    friend: UserData;
    status: TFriendStatus;
    logCreate(): void;
    logUpdate(): void;
    logRemove(): void;
}
