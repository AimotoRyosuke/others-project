export type EmotionCode =
  | 'happy'
  | 'sad'
  | 'lonely'
  | 'fun'
  | 'angry'
  | 'scary'
  | 'amazing';

export interface Me {
  id: string;
  nickname?: string | null;
  ordinal: number;
  createdAt: string;
}

export interface Post {
  id: string;
  whatPerson: string;
  thoughts?: string | null;
  emotions: EmotionCode[];
  createdAt: string;
  updatedAt: string;
  reactionCount: number;
  hasUserReacted: boolean;
}

export interface Reaction {
  id: string;
  postId: string;
  type: string;
  createdAt: string;
}

export interface PrivateNote {
  id: string;
  postId: string;
  body: string;
  createdAt: string;
  post: Post;
}

export interface PageInfo {
  endCursor?: string | null;
  hasNextPage: boolean;
}

export interface PostEdge {
  node: Post;
  cursor: string;
}

export interface PostConnection {
  edges: PostEdge[];
  pageInfo: PageInfo;
}

export interface CreatePostInput {
  whatPerson: string;
  thoughts?: string;
  emotions: EmotionCode[];
}

export interface SetNicknameInput {
  nickname: string;
}

export interface AddNoteInput {
  postId: string;
  body: string;
}

export interface ReactInput {
  postId: string;
  type: string;
}

export interface FeedArgs {
  after?: string;
  first?: number;
  emotionsAny?: EmotionCode[];
}

export interface MyPostsArgs {
  after?: string;
  first?: number;
}

export interface MyReactionsArgs {
  after?: string;
  first?: number;
}
