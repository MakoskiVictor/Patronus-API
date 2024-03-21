import { Test, TestingModule } from '@nestjs/testing';
import { WandsService } from './wands.service';

describe('WandsService', () => {
  let service: WandsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WandsService],
    }).compile();

    service = module.get<WandsService>(WandsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
