import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateAlternateNameDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name: string;
}
