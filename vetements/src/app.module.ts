import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VetementsModule } from './vetements/vetements.module';

@Module({
  imports: [VetementsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
