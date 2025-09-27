import type { EmotionCode, Post, PrivateNote, GraphQLPost } from './domain';

export interface PageInfo {
  endCursor?: string | null;
  hasNextPage: boolean;
}
export interface Edge<T> {
  node: T;
  cursor: string;
}
export interface Connection<T> {
  edges: Array<Edge<T>>;
  pageInfo: PageInfo;
}

export interface Me {
  id: string;
  nickname: string | null;
  ordinal: number;
}

export interface FeedFilter {
  emotionsAny?: EmotionCode[];
}

// Queries
export interface FeedQuery {
  feed: Connection<Post>;
}
export interface MyReactionsQuery {
  myReactions: Connection<Post>;
}
export interface MyNotesQuery {
  myNotes: PrivateNote[];
}
export interface MyPostsQuery {
  myPosts: Connection<Post>;
}
export interface MeQuery {
  me: Me;
}

// Mutations
export interface CreatePostInput {
  whatPerson: string;
  thoughts?: string;
  emotions: EmotionCode[];
}
export interface CreatePostMutation {
  createPost: Post;
}
export interface ReactMutation {
  react: { id: string; postId: string; type: string; createdAt: string };
}
export interface UnreactMutation {
  unreact: boolean;
}
export interface AddNoteMutation {
  addNote: PrivateNote;
}
export interface DeleteNoteMutation {
  deleteNote: boolean;
}
export interface SetNicknameInput {
  nickname: string;
}
export interface SetNicknameMutation {
  setNickname: Me;
}

// Input types for arguments
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

export interface AddNoteInput {
  postId: string;
  body: string;
}

export interface ReactInput {
  postId: string;
  type: string;
}

// GraphQL Response types using GraphQLPost
export type PostConnection = Connection<GraphQLPost>;
export type PostEdge = Edge<GraphQLPost>;
