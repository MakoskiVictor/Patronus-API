import { Module } from '@nestjs/common';
import { AlternateNamesService } from './alternate_names.service';
import { AlternateNamesController } from './alternate_names.controller';
import { AlternateName } from './entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AlternateName])],
  controllers: [AlternateNamesController],
  providers: [AlternateNamesService],
  exports: [],
})
export class AlternateNamesModule {}
