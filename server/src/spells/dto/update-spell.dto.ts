import { PartialType } from '@nestjs/mapped-types';
import { CreateSpellDto } from './create-spell.dto';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateSpellDto extends PartialType(CreateSpellDto) {
  @IsOptional()
  @IsString()
  @MaxLength(50)
  name?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  description?: string;
}
