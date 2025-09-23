export type EmotionCode =
  | "happy" // 嬉しい
  | "sad" // 悲しい
  | "lonely" // 寂しい
  | "fun" // 楽しい
  | "angry" // 怒り
  | "scary" // 怖い
  | "amazing"; // すごい

export interface User {
  id: string;
  firebaseUid: string; // Google/Apple OIDC
  ordinal: number; // anonymous<ordinal>
  nickname: string | null; // null=未設定
  createdAt: string; // ISO
}

export interface Post {
  id: string;
  authorId: string; // UIでは匿名表示（authorは返さないか匿名化）
  whatPerson: string;
  thoughts?: string | null;
  emotions: EmotionCode[];
  createdAt: string; // ISO
  updatedAt: string; // ISO
}

export interface Reaction {
  id: string;
  postId: string;
  userId: string; // 公開は件数のみ
  type: string; // 'like' など
  createdAt: string;
}

export interface PrivateNote {
  id: string;
  postId: string;
  userId: string;
  body: string;
  createdAt: string;
}
