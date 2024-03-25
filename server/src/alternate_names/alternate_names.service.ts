import { Injectable } from '@nestjs/common';
import { CreateAlternateNameDto } from './dto/create-alternate_name.dto';
import { UpdateAlternateNameDto } from './dto/update-alternate_name.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AlternateName } from './entities';

@Injectable()
export class AlternateNamesService {
  constructor(@InjectRepository(AlternateName) private alternateNameRepository: Repository <AlternateName>){}

  // ----------CREATE----------
  async create(createAlternateNameDto: CreateAlternateNameDto) {
    const findName = await this.
  }

  // ----------FIND ----------
  async findAll() {
    return `This action returns all alternateNames`;
  }

  // ----------FIND ONE----------
  async findOne(id: number) {
    return `This action returns a #${id} alternateName`;
  }

  // ----------UPDATE ----------
  async update(id: number, updateAlternateNameDto: UpdateAlternateNameDto) {
    return `This action updates a #${id} alternateName`;
  }

  // ---------- REMOVE----------
  async remove(id: number) {
    return `This action removes a #${id} alternateName`;
  }
}
