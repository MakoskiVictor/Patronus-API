import { PartialType } from '@nestjs/mapped-types';
import { CreateHouseDto } from './create-house.dto';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateHouseDto extends PartialType(CreateHouseDto) {
  @IsOptional()
  @IsString()
  @MaxLength(50)
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
