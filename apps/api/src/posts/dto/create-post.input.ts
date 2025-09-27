import { InputType, Field } from '@nestjs/graphql';
import {
  IsArray,
  ArrayNotEmpty,
  IsOptional,
  IsString,
  Length,
  MaxLength,
  IsIn,
} from 'class-validator';

const EMOTIONS = [
  'happy',
  'sad',
  'lonely',
  'fun',
  'angry',
  'scary',
  'amazing',
] as const;

@InputType()
export class CreatePostInput {
  @Field()
  @IsString()
  @Length(3, 500)
  whatPerson!: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  thoughts?: string;

  @Field(() => [String])
  @IsArray()
  @ArrayNotEmpty()
  @IsIn(EMOTIONS, { each: true })
  emotions!: (typeof EMOTIONS)[number][];
}
