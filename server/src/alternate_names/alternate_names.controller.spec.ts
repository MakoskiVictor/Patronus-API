import { Test, TestingModule } from '@nestjs/testing';
import { AlternateNamesController } from './alternate_names.controller';
import { AlternateNamesService } from './alternate_names.service';

describe('AlternateNamesController', () => {
  let controller: AlternateNamesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlternateNamesController],
      providers: [AlternateNamesService],
    }).compile();

    controller = module.get<AlternateNamesController>(AlternateNamesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
