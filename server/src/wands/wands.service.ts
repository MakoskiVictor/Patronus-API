import { Injectable } from '@nestjs/common';
import { CreateWandDto } from './dto/create-wand.dto';
import { UpdateWandDto } from './dto/update-wand.dto';

@Injectable()
export class WandsService {
  create(createWandDto: CreateWandDto) {
    return 'This action adds a new wand';
  }

  findAll() {
    return `This action returns all wands`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wand`;
  }

  update(id: number, updateWandDto: UpdateWandDto) {
    return `This action updates a #${id} wand`;
  }

  remove(id: number) {
    return `This action removes a #${id} wand`;
  }
}
