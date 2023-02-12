import { UserData } from "../user-data";
import { TFriendStatus } from "./friend.types";
export declare class Friend {
    id: string;
    userId: string;
    friend: UserData;
    status: TFriendStatus;
    logCreate(): void;
    logUpdate(): void;
    logRemove(): void;
}
