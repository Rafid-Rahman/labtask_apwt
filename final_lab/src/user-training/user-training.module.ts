import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTrainingController } from './user-training.controller';
import { UserTrainingService } from './user-training.service';
import { UserTraining } from './entities/user-training.entity';
import { TrainingVideo } from './entities/training-video.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserTraining, TrainingVideo])],
  controllers: [UserTrainingController],
  providers: [UserTrainingService],
})
export class UserTrainingModule {}