import { Test, TestingModule } from '@nestjs/testing';
import { AlternateNamesService } from './alternate_names.service';

describe('AlternateNamesService', () => {
  let service: AlternateNamesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlternateNamesService],
    }).compile();

    service = module.get<AlternateNamesService>(AlternateNamesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
