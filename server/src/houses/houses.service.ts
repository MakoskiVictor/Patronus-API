import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateHouseDto } from './dto/create-house.dto';
import { UpdateHouseDto } from './dto/update-house.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { House } from './entities';
import { Repository } from 'typeorm';

@Injectable()
export class HousesService {
  constructor(
    @InjectRepository(House) private houseRepository: Repository<House>,
  ) {}

  // CREATE HOUSE
  async create(createHouseDto: CreateHouseDto) {
    // Search if the House alredy exists

    const houseFound = await this.houseRepository.findOne({
      where: {
        name: createHouseDto.name,
      },
    });

    if (houseFound) {
      throw new HttpException('The House alredy exist!', HttpStatus.CONFLICT);
    }

    // If no exists, create one
    const newHouse = new House();
    newHouse.name = createHouseDto.name;
    newHouse.description = createHouseDto.description;
    return await this.houseRepository.save(newHouse);
  }

  async findAll() {
    // Seach the Houses
    return this.houseRepository.find();
  }

  async findOne(uuid: string) {
    const findHouse = await this.houseRepository.findOne({
      where: {
        id: uuid,
      },
    });

    if (!findHouse) {
      throw new HttpException('House not found', HttpStatus.NOT_FOUND);
    }
    return findHouse;
  }

  async update(id: number, updateHouseDto: UpdateHouseDto) {
    return `This action updates a #${id} house`;
  }

  async remove(id: number) {
    return `This action removes a #${id} house`;
  }
}
