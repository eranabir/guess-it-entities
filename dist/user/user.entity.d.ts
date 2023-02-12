export declare class User {
    id: string;
    email: string;
    password: string;
    provider: 'google' | 'email' | 'facebook';
    logCreate(): void;
    logUpdate(): void;
    logRemove(): void;
}
