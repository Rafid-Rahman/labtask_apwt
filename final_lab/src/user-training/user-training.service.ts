import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserTraining } from './entities/user-training.entity';
import { TrainingVideo } from './entities/training-video.entity';
import { UserTrainingDto } from './dto/user-training.dto';
import { TrainingVideoDto } from './dto/training-video.dto';

@Injectable()
export class UserTrainingService {
  constructor(
    @InjectRepository(UserTraining)
    private readonly userTrainingRepository: Repository<UserTraining>,
    @InjectRepository(TrainingVideo)
    private readonly trainingVideoRepository: Repository<TrainingVideo>,
  ) {}


  async addUserTraining(userTrainingDto: UserTrainingDto): Promise<UserTraining> {
    const { userId, progress, feedback, videoId } = userTrainingDto;

    const video = await this.trainingVideoRepository.findOne({where :{id:videoId}});
    if (!video) {
      throw new NotFoundException(`Training video with ID ${videoId} not found`);
    }

    const newUserTraining = this.userTrainingRepository.create({
      userId,
      progress,
      feedback,
      video,
    });

    return this.userTrainingRepository.save(newUserTraining);
  }

  async getAllUserTrainings(): Promise<UserTraining[]> {
    return this.userTrainingRepository.find();
  }

  async getTrainingVideo(videoId: number): Promise<TrainingVideo> {
    return this.trainingVideoRepository.findOne({where : {id: videoId}});
  }

  async addTrainingVideo(trainingVideoDto: TrainingVideoDto): Promise<TrainingVideo> {
    const newTrainingVideo = this.trainingVideoRepository.create(trainingVideoDto);
    return this.trainingVideoRepository.save(newTrainingVideo);
  }
}
