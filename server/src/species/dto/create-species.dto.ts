import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateSpeciesDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string;

  @IsNotEmpty()
  @IsString()
  deacription: string;
}
