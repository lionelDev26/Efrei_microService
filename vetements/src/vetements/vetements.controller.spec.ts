import { Test, TestingModule } from '@nestjs/testing';
import { VetementsController } from './vetements.controller';
import { VetementsService } from './vetements.service';

describe('VetementsController', () => {
  let controller: VetementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VetementsController],
      providers: [VetementsService],
    }).compile();

    controller = module.get<VetementsController>(VetementsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
