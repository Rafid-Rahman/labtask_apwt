import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserTrainingService } from './user-training.service';
import { UserTraining } from './entities/user-training.entity';
import { TrainingVideo } from './entities/training-video.entity';
import { UserTrainingDto } from './dto/user-training.dto';
import { TrainingVideoDto } from './dto/training-video.dto';

@Controller('user-training')
export class UserTrainingController {
  constructor(private readonly userTrainingService: UserTrainingService) {}

  @Post('add-training')
  async addUserTraining(@Body() userTrainingDto: UserTrainingDto): Promise<UserTraining> {
    return this.userTrainingService.addUserTraining(userTrainingDto);
  }

  @Get('all-trainings')
  async getAllUserTrainings(): Promise<UserTraining[]> {
    return this.userTrainingService.getAllUserTrainings();
  }

  @Get('training-video/:videoId')
  async getTrainingVideo(@Param('videoId') videoId: number): Promise<TrainingVideo> {
    return this.userTrainingService.getTrainingVideo(videoId);
  }

  @Post('add-training-video')
  async addTrainingVideo(@Body() trainingVideoDto: TrainingVideoDto): Promise<TrainingVideo> {
    return this.userTrainingService.addTrainingVideo(trainingVideoDto);
  }
}
