import {
  IsEmail,
  IsEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmpty()
  @IsString()
  @MaxLength(50)
  username: string;

  @IsEmpty()
  @IsEmail()
  email: string;

  @IsEmpty()
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  rol?: string;
}
