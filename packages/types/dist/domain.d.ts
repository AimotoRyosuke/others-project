export type EmotionCode = "happy" | "sad" | "lonely" | "fun" | "angry" | "scary" | "amazing";
export interface User {
    id: string;
    firebaseUid: string;
    ordinal: number;
    nickname: string | null;
    createdAt: string;
}
export interface Post {
    id: string;
    authorId: string;
    whatPerson: string;
    thoughts?: string | null;
    emotions: EmotionCode[];
    createdAt: string;
    updatedAt: string;
}
export interface Reaction {
    id: string;
    postId: string;
    userId: string;
    type: string;
    createdAt: string;
}
export interface PrivateNote {
    id: string;
    postId: string;
    userId: string;
    body: string;
    createdAt: string;
}
//# sourceMappingURL=domain.d.ts.map