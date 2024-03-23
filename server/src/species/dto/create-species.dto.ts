import { IsEmpty, IsString, MaxLength } from 'class-validator';

export class CreateSpeciesDto {
  @IsEmpty()
  @IsString()
  @MaxLength(50)
  name: string;

  @IsEmpty()
  @IsString()
  deacription: string;
}
