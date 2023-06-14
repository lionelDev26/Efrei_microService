import { ConfigModule } from '@nestjs/config';
import { Vetement } from '../vetements/entities/vetement.entity';

export default (): ConfigModule => ({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Vetement],
  synchronize: true,
});

