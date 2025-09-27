import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id!: string;

  @Field()
  firebaseUid!: string;

  @Field()
  ordinal!: number;

  @Field({ nullable: true })
  nickname?: string;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}

@ObjectType()
export class Emotion {
  @Field(() => ID)
  id!: string;

  @Field()
  code!: string;

  @Field()
  label!: string;
}

@ObjectType()
export class PostEmotion {
  @Field()
  postId!: string;

  @Field()
  emotionId!: string;

  @Field(() => Emotion)
  emotion!: Emotion;
}

@ObjectType()
export class Post {
  @Field(() => ID)
  id!: string;

  @Field()
  authorId!: string;

  @Field()
  whatPerson!: string;

  @Field({ nullable: true })
  thoughts?: string;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;

  @Field(() => User)
  author!: User;

  @Field(() => [PostEmotion])
  postEmotions!: PostEmotion[];
}
