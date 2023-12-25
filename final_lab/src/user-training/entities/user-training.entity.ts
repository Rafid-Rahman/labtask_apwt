import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { TrainingVideo } from './training-video.entity';

@Entity('user_trainings')
export class UserTraining {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  progress: number;

  @Column()
  feedback: string;

  @ManyToOne(() => TrainingVideo, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'videoId' })
  video: TrainingVideo;
}
