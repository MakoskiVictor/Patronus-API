import {
  IsBoolean,
  IsDate,
  IsEmpty,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
} from 'class-validator';

export class CreateCharacterDto {
  @IsEmpty()
  @IsString()
  @MaxLength(50)
  name: string;

  @IsOptional()
  @IsString()
  gender?: string;

  @IsOptional()
  @IsDate()
  date_of_birth?: Date;

  @IsEmpty()
  @IsBoolean()
  wizard: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  patronus?: string;

  @IsEmpty()
  @IsBoolean()
  hogwarts_student: boolean;

  @IsEmpty()
  @IsBoolean()
  hogwarts_staff: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  actor?: string;

  @IsEmpty()
  @IsBoolean()
  alive: boolean;

  @IsOptional()
  @IsUrl()
  image?: string;
}
