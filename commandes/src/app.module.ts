import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommandesModule } from './commandes/commandes.module';

@Module({
  imports: [CommandesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
