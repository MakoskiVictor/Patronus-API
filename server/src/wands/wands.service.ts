import { Injectable } from '@nestjs/common';
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
  create(createWandDto: CreateWandDto) {
    return 'This action adds a new wand';
  }

  // --------- FIND ALL ---------
  findAll() {
    return `This action returns all wands`;
  }

  // --------- FINDE ONE ---------
  findOne(id: number) {
    return `This action returns a #${id} wand`;
  }

  // --------- UPDATE ---------
  update(id: number, updateWandDto: UpdateWandDto) {
    return `This action updates a #${id} wand`;
  }

  // --------- REMOVE ---------
  remove(id: number) {
    return `This action removes a #${id} wand`;
  }
}
