import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('training_videos')
export class TrainingVideo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  videoFile: string; 
}
