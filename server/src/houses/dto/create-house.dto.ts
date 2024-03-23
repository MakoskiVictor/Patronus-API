import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateHouseDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
