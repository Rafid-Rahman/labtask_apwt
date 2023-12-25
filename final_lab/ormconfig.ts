import { TrainingVideo } from "src/user-training/entities/training-video.entity";
import { UserTraining } from "src/user-training/entities/user-training.entity";
import {PostgresConnectionOptions} from "typeorm/driver/postgres/PostgresConnectionOptions";

const config: PostgresConnectionOptions = {
    type: "postgres",
    database: "PRD",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: '1234',
    entities: [UserTraining, TrainingVideo],
    synchronize: true
}

export default config;