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
    const findAllSpecies = await this.speciesRepository.find({
      select: ['id', 'name', 'description'],
    });
    if (findAllSpecies.length === 0) {
      throw new HttpException(
        'There are no species created yet!',
        HttpStatus.NOT_FOUND,
      );
    }
    return findAllSpecies;
  }

  async findOne(id: number) {
    const findSpecie = await this.speciesRepository.findOne({
      where: {
        id: id,
      },
      select: ['id', 'name', 'description'],
    });

    if (!findSpecie) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return findSpecie;
  }

  async update(id: number, updateSpeciesDto: UpdateSpeciesDto) {
    const findSpecie = await this.speciesRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!findSpecie) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    await this.speciesRepository.update(id, updateSpeciesDto);
    return { status: 201, message: 'Specie updated successfully!' };
  }

  async remove(id: number) {
    const findSpecie = await this.speciesRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!findSpecie) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    await this.speciesRepository.softDelete({
      id: id,
    });
    return { status: 204, message: 'Specie deleted successfully!' };
  }

  async recover(updateSpeciesDto: UpdateSpeciesDto) {
    const findSpecie = await this.speciesRepository.findOne({
      where: {
        name: updateSpeciesDto.name,
      },
      withDeleted: true,
    });

    if (!findSpecie || findSpecie.deletedAt === null) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    await this.speciesRepository.recover(findSpecie);
    return { status: 201, message: 'Specie successfully recovered!' };
  }
}
