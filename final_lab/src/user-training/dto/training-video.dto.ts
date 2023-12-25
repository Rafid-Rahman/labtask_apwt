import { IsString, IsNotEmpty } from 'class-validator';

export class TrainingVideoDto {
    
  @IsNotEmpty()
  @IsString()
  videoFile: string; 
}
