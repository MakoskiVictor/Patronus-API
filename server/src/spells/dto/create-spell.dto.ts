import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateSpellDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  description: string;
}
