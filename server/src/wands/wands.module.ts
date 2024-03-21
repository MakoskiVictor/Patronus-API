import { Module } from '@nestjs/common';
import { WandsService } from './wands.service';
import { WandsController } from './wands.controller';

@Module({
  controllers: [WandsController],
  providers: [WandsService],
})
export class WandsModule {}
