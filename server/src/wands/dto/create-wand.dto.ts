import {
  IsDecimal,
  IsEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateWandDto {
  @IsEmpty()
  @IsString()
  @MaxLength(50)
  wood: string;

  @IsEmpty()
  @IsString()
  @MaxLength(50)
  core: string;

  @IsEmpty()
  @IsNumber()
  @IsDecimal({ decimal_digits: '2' })
  length: number;
}
