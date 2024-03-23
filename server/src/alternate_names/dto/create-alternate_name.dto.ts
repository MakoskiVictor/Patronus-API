import { IsString, MaxLength, IsOptional } from 'class-validator';

export class CreateAlternateNameDto {
  @IsOptional()
  @IsString()
  @MaxLength(50)
  name: string;
}
