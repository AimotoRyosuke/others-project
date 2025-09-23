import { IsArray, ArrayNotEmpty, IsOptional, IsString, Length, MaxLength, IsIn } from 'class-validator';
const EMOTIONS = ['happy','sad','lonely','fun','angry','scary','amazing'] as const;
export class CreatePostDto {
  @IsString() @Length(3, 500)
  whatPerson!: string;

  @IsOptional() @IsString() @MaxLength(1000)
  thoughts?: string;

  @IsArray() @ArrayNotEmpty() @IsIn(EMOTIONS, { each: true })
  emotions!: typeof EMOTIONS[number][];
}
