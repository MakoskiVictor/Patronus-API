import { PartialType } from '@nestjs/mapped-types';
import { CreateAlternateNameDto } from './create-alternate_name.dto';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateAlternateNameDto extends PartialType(
  CreateAlternateNameDto,
) {
  @IsOptional()
  @IsString()
  @MaxLength(50)
  name: string;
}
