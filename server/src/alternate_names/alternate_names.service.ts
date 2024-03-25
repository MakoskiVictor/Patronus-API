import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAlternateNameDto } from './dto/create-alternate_name.dto';
import { UpdateAlternateNameDto } from './dto/update-alternate_name.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AlternateName } from './entities';

@Injectable()
export class AlternateNamesService {
  constructor(
    @InjectRepository(AlternateName)
    private alternateNameRepository: Repository<AlternateName>,
  ) {}

  // ----------CREATE----------
  async create(createAlternateNameDto: CreateAlternateNameDto) {
    const findName = await this.alternateNameRepository.findOne({
      where: {
        name: createAlternateNameDto.name,
      },
    });

    if (findName) {
      throw new HttpException(
        'Alternate Name alredy exists!',
        HttpStatus.CONFLICT,
      );
    }
    return await this.alternateNameRepository.save(createAlternateNameDto);
  }

  // ----------FIND ----------
  async findAll() {
    const findNames = await this.alternateNameRepository.find({
      select: ['id', 'name'],
    });

    if (findNames.length === 0) {
      throw new HttpException('There are no names yet!', HttpStatus.NOT_FOUND);
    }
    return findNames;
  }

  // ----------FIND ONE----------
  async findOne(id: number) {
    return `This action returns a #${id} alternateName`;
  }

  // ----------UPDATE ----------
  async update(id: number, updateAlternateNameDto: UpdateAlternateNameDto) {
    const findName = await this.alternateNameRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!findName) {
      throw new HttpException('Name not found!', HttpStatus.NOT_FOUND);
    }

    return await this.alternateNameRepository.update(
      id,
      updateAlternateNameDto,
    );
  }

  // ---------- REMOVE----------
  async remove(id: number) {
    return `This action removes a #${id} alternateName`;
  }
}
