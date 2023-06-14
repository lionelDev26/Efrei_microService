import { Module } from '@nestjs/common';
import { VetementsService } from './vetements.service';
import { VetementsController } from './vetements.controller';
import { VetementRepository } from './vetement.repository';

@Module({
  controllers: [VetementsController],
  providers: [VetementsService,VetementRepository]
})
export class VetementsModule {}
