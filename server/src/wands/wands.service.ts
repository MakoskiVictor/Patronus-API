import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateWandDto } from './dto/create-wand.dto';
import { UpdateWandDto } from './dto/update-wand.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wand } from './entities';

@Injectable()
export class WandsService {
  constructor(
    @InjectRepository(Wand) private wandsRepository: Repository<Wand>,
  ) {}

  // --------- CREATE ---------
  async create(createWandDto: CreateWandDto) {
    return await this.wandsRepository.save(createWandDto);
  }

  // --------- UPDATE ---------
  async update(id: number, updateWandDto: UpdateWandDto) {
    const findWand = await this.wandsRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!findWand) {
      throw new HttpException('Wand not found', HttpStatus.NOT_FOUND);
    }

    return await this.wandsRepository.update(id, updateWandDto);
  }
}
