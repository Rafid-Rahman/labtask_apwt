import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class UserTrainingDto {
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsNumber()
  progress: number;

  @IsNotEmpty()
  @IsString()
  feedback: string;

  @IsNotEmpty()
  @IsNumber()
  videoId: number; 
}
