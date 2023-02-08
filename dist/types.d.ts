export type TFriendStatus = 'WAITING_FOR_APPROVAL' | 'WAITING_FOR_REMOTE_USER_APPROVAL' | 'APPROVED' | 'REJECTED' | 'REJECTED_BY_USER' | 'REMOVED' | 'CANCELED';
export type TGameStatus = 'CREATED' | 'INITIALIZED' | 'PAUSED' | 'PLAYING' | 'START_NEXT_ROUND' | 'ENDED';
export type TGameRequestStatus = 'PENDING' | 'REJECTED';
export interface IWord {
    id: string;
    heb: string;
    en: string;
    categories: string[];
}
export interface IGameWord extends IWord {
    team: 'A' | 'B';
    round: 1 | 2 | 3;
}
