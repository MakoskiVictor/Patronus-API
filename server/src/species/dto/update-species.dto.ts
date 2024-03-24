import { PartialType } from '@nestjs/mapped-types';
import { CreateSpeciesDto } from './create-species.dto';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateSpeciesDto extends PartialType(CreateSpeciesDto) {
  @IsOptional()
  @IsString()
  @MaxLength(50)
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
