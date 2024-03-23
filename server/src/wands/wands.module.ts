import { Module } from '@nestjs/common';
import { WandsService } from './wands.service';
import { WandsController } from './wands.controller';
import { Wand } from './entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Wand])],
  controllers: [WandsController],
  providers: [WandsService],
})
export class WandsModule {}
