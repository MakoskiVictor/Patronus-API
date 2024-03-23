import { IsEmpty, IsString, MaxLength } from 'class-validator';

export class CreateSpellDto {
  @IsEmpty()
  @IsString()
  @MaxLength(50)
  name: string;

  @IsEmpty()
  @IsString()
  @MaxLength(255)
  description: string;
}
