import { IsEmpty, IsString, MaxLength } from 'class-validator';

export class CreateHouseDto {
  @IsEmpty()
  @IsString()
  @MaxLength(50)
  name: string;

  @IsEmpty()
  @IsString()
  descriprion: string;
}
