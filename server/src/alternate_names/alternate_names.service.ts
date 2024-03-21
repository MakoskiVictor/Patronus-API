import { Injectable } from '@nestjs/common';
import { CreateAlternateNameDto } from './dto/create-alternate_name.dto';
import { UpdateAlternateNameDto } from './dto/update-alternate_name.dto';

@Injectable()
export class AlternateNamesService {
  create(createAlternateNameDto: CreateAlternateNameDto) {
    return 'This action adds a new alternateName';
  }

  findAll() {
    return `This action returns all alternateNames`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alternateName`;
  }

  update(id: number, updateAlternateNameDto: UpdateAlternateNameDto) {
    return `This action updates a #${id} alternateName`;
  }

  remove(id: number) {
    return `This action removes a #${id} alternateName`;
  }
}
