import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserTrainingModule } from './user-training/user-training.module';
import { UserTraining } from './user-training/entities/user-training.entity';
import { TrainingVideo } from './user-training/entities/training-video.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...config,
      entities: [UserTraining, TrainingVideo], 
    }), 
    
   UserTrainingModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
     consumer
     .apply()
     .forRoutes()

  }
}