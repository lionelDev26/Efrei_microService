import { Test, TestingModule } from '@nestjs/testing';
import { VetementsService } from './vetements.service';

describe('VetementsService', () => {
  let service: VetementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VetementsService],
    }).compile();

    service = module.get<VetementsService>(VetementsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
