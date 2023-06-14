import { ConfigModule } from '@nestjs/config';
import { Commande } from '../commandes/entities/commande.entity';

export default (): ConfigModule => ({
  type: 'mysql',
  host: 'localhost',
  port: parseInt(process.env.DB_PORT, 10),
  username:'root',
  password:'',
  database:'micro_service',
  entities: [Commande],
  synchronize: true,
});
