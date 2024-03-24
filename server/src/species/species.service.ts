import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSpeciesDto } from './dto/create-species.dto';
import { UpdateSpeciesDto } from './dto/update-species.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Species } from './entities';
import { Repository } from 'typeorm';

@Injectable()
export class SpeciesService {
  constructor(
    @InjectRepository(Species) private speciesRepository: Repository<Species>,
  ) {}

  // CREATE SPECIE

  async create(createSpeciesDto: CreateSpeciesDto) {
    const specieFound = await this.speciesRepository.findOne({
      where: {
        name: createSpeciesDto.name,
      },
    });

    if (specieFound) {
      throw new HttpException('The specie alredy exist!', HttpStatus.CONFLICT);
    }
    return await this.speciesRepository.save(createSpeciesDto);
  }

  async findAll() {
    return `This action returns all species`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} species`;
  }

  async update(id: number, updateSpeciesDto: UpdateSpeciesDto) {
    return `This action updates a #${id} species`;
  }

  async remove(id: number) {
    return `This action removes a #${id} species`;
  }
}
