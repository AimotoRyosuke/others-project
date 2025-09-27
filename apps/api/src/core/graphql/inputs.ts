import { InputType, Field, ArgsType } from '@nestjs/graphql';
import {
  IsString,
  IsArray,
  ArrayNotEmpty,
  Length,
  MaxLength,
  IsOptional,
  IsIn,
} from 'class-validator';
import { emotionCodes } from '@others/validation';

@InputType()
export class CreatePostInput {
  @Field()
  @IsString()
  @Length(3, 500, {
    message: 'どんな人がいた？は3文字以上500文字以内で入力してください',
  })
  whatPerson!: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(1000, { message: 'どう思った？は1000文字以内で入力してください' })
  thoughts?: string;

  @Field(() => [String])
  @IsArray()
  @ArrayNotEmpty({ message: '感情を1つ以上選択してください' })
  @IsIn(emotionCodes, { each: true, message: '無効な感情が選択されています' })
  emotions!: string[];
}

@InputType()
export class SetNicknameInput {
  @Field()
  @IsString({ message: 'ニックネームは文字列で入力してください' })
  @Length(3, 20, {
    message: 'ニックネームは3文字以上20文字以下で入力してください',
  })
  nickname!: string;
}

@InputType()
export class AddNoteInput {
  @Field()
  @IsString()
  postId!: string;

  @Field()
  @IsString()
  @MaxLength(1000, { message: 'メモは1000文字以内で入力してください' })
  body!: string;
}

@InputType()
export class ReactInput {
  @Field()
  @IsString()
  postId!: string;

  @Field()
  @IsString()
  @IsIn(['like'], { message: '無効なリアクションタイプです' })
  type!: string;
}

@ArgsType()
export class FeedArgs {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  after?: string;

  @Field({ nullable: true, defaultValue: 20 })
  @IsOptional()
  first?: number;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray()
  @IsIn(emotionCodes, { each: true })
  emotionsAny?: string[];
}

@ArgsType()
export class MyPostsArgs {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  after?: string;

  @Field({ nullable: true, defaultValue: 20 })
  @IsOptional()
  first?: number;
}

@ArgsType()
export class MyReactionsArgs {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  after?: string;

  @Field({ nullable: true, defaultValue: 20 })
  @IsOptional()
  first?: number;
}
