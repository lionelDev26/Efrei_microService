import { ConfigModule } from '@nestjs/config';
import { Vetement } from './vetements/entities/vetement.entity';

export default (): ConfigModule => ({
    type: 'mysql',
    host: 'localhost',
    port: parseInt(process.env.DB_PORT, 10),
    username:'root',
    password:'dbfilmon',
    database:'micro_service',
    entities: [Vetement],
    synchronize: true,
  });
