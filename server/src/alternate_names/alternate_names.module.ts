import { Module } from '@nestjs/common';
import { AlternateNamesService } from './alternate_names.service';
import { AlternateNamesController } from './alternate_names.controller';

@Module({
  controllers: [AlternateNamesController],
  providers: [AlternateNamesService],
})
export class AlternateNamesModule {}
