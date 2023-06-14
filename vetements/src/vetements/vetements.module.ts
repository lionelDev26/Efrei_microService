import { Module } from '@nestjs/common';
import { VetementsService } from './vetements.service';
import { VetementsController } from './vetements.controller';

@Module({
  controllers: [VetementsController],
  providers: [VetementsService]
})
export class VetementsModule {}
