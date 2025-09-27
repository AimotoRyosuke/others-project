import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id!: string;

  @Field(() => Int)
  ordinal!: number;

  @Field({ nullable: true })
  nickname?: string;

  @Field()
  createdAt!: string;
}

@ObjectType()
export class Me extends User {}

@ObjectType()
export class Post {
  @Field(() => ID)
  id!: string;

  @Field()
  whatPerson!: string;

  @Field({ nullable: true })
  thoughts?: string;

  @Field(() => [String])
  emotions!: string[];

  @Field()
  createdAt!: string;

  @Field()
  updatedAt!: string;

  @Field(() => Int)
  reactionCount!: number;

  @Field()
  hasUserReacted!: boolean;
}

@ObjectType()
export class Reaction {
  @Field(() => ID)
  id!: string;

  @Field(() => ID)
  postId!: string;

  @Field()
  type!: string;

  @Field()
  createdAt!: string;
}

@ObjectType()
export class PrivateNote {
  @Field(() => ID)
  id!: string;

  @Field(() => ID)
  postId!: string;

  @Field()
  body!: string;

  @Field()
  createdAt!: string;

  @Field(() => Post)
  post!: Post;
}

@ObjectType()
export class PageInfo {
  @Field({ nullable: true })
  endCursor?: string;

  @Field()
  hasNextPage!: boolean;
}

@ObjectType()
export class PostEdge {
  @Field(() => Post)
  node!: Post;

  @Field()
  cursor!: string;
}

@ObjectType()
export class PostConnection {
  @Field(() => [PostEdge])
  edges!: PostEdge[];

  @Field(() => PageInfo)
  pageInfo!: PageInfo;
}
