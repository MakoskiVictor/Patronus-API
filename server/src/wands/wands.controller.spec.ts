import { Test, TestingModule } from '@nestjs/testing';
import { WandsController } from './wands.controller';
import { WandsService } from './wands.service';

describe('WandsController', () => {
  let controller: WandsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WandsController],
      providers: [WandsService],
    }).compile();

    controller = module.get<WandsController>(WandsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
