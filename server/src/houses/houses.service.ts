import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateHouseDto } from './dto/create-house.dto';
import { UpdateHouseDto } from './dto/update-house.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { House } from './entities';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class HousesService {
  constructor(
    @InjectRepository(House) private houseRepository: Repository<House>,
  ) {}

  // ------CREATE HOUSE------

  async create(createHouseDto: CreateHouseDto) {
    // Search if the House alredy exists

    const houseFound = await this.houseRepository.findOne({
      where: {
        name: createHouseDto.name,
      },
      withDeleted: true,
    });

    if (houseFound && houseFound.deletedAt !== null) {
      throw new HttpException(
        'The House exist but need to be recovered!',
        HttpStatus.NOT_FOUND,
      );
    }

    if (houseFound) {
      throw new HttpException('The House alredy exist!', HttpStatus.NOT_FOUND);
    }

    // If no exists, create one
    const newHouse = new House();
    newHouse.name = createHouseDto.name;
    newHouse.description = createHouseDto.description;
    return await this.houseRepository.save(newHouse);
  }

  // ------RECOVER HOUSE------

  async recoverHouse(updateHouseDto: UpdateHouseDto) {
    const houseFound = await this.houseRepository.findOne({
      where: {
        name: updateHouseDto.name,
      },
      withDeleted: true,
    });

    if (!houseFound || houseFound.deletedAt === null) {
      throw new HttpException('House not found!', HttpStatus.NOT_FOUND);
    }

    await this.houseRepository.recover(houseFound);
    return { status: 201, message: 'House successfully recovered!' };
  }

  // ------FIND ALL HOUSES------

  async findAll() {
    // Seach the Houses
    const housesFound = await this.houseRepository.find({
      select: ['id', 'name', 'description'],
    });

    if (housesFound.length === 0) {
      throw new HttpException('There are hot houses yet', HttpStatus.NOT_FOUND);
    }

    return housesFound;
  }

  // ------FIND ONE HOUSE BY ID------
  async findOne(uuid: string) {
    const findHouse = await this.houseRepository.findOne({
      where: {
        id: uuid,
      },
      select: ['id', 'name', 'description', 'characters'],
    });

    if (!findHouse) {
      throw new HttpException('House not found', HttpStatus.NOT_FOUND);
    }
    return findHouse;
  }

  // ------FIND SEVERAL HOUSES BY NAME------

  async findByName(name: string) {
    const housesFound = await this.houseRepository.find({
      where: {
        name: ILike(`%${name}%`),
      },
      select: ['id', 'name', 'description'],
    });

    if (housesFound.length === 0) {
      throw new HttpException('No houses found', HttpStatus.NOT_FOUND);
    }

    return housesFound;
  }

  // ------UPDATE HOUSE BY ID------

  async update(uuid: string, updateHouseDto: UpdateHouseDto) {
    const houseFound = this.houseRepository.findOne({
      where: {
        id: uuid,
      },
    });

    if (!houseFound) {
      throw new HttpException('House not found', HttpStatus.NOT_FOUND);
    }
    await this.houseRepository.update(uuid, updateHouseDto);

    return { message: 'House updated successfully' };
  }

  // ------DELETE HOUSE------

  async remove(uuid: string) {
    const findHouse = await this.houseRepository.findOne({
      where: { id: uuid },
    });

    if (!findHouse) {
      throw new HttpException('House not found', HttpStatus.NOT_FOUND);
    }
    return await this.houseRepository.softDelete({
      id: uuid,
    });
  }
}
