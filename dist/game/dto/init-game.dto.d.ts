export declare class InitGameDTO {
    difficulty: 'HARD' | 'MEDIUM' | 'EASY';
    categories: string[];
    usersIds: string[];
    title: string;
    mode: 'singleplayer' | 'multiplayer';
}
