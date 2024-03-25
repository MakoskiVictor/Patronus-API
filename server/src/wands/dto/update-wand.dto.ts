import { PartialType } from '@nestjs/mapped-types';
import { CreateWandDto } from './create-wand.dto';
import {
  IsDecimal,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class UpdateWandDto extends PartialType(CreateWandDto) {
  @IsOptional()
  @IsString()
  @MaxLength(50)
  wood?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  core?: string;

  @IsOptional()
  @IsNumber()
  @IsDecimal({ decimal_digits: '2' })
  length?: number;
}
