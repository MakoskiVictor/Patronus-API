import { PartialType } from '@nestjs/mapped-types';
import { CreateAlternateNameDto } from './create-alternate_name.dto';

export class UpdateAlternateNameDto extends PartialType(CreateAlternateNameDto) {}
