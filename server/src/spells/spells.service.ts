import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSpellDto } from './dto/create-spell.dto';
import { UpdateSpellDto } from './dto/update-spell.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Spell } from './entities';
import { Repository } from 'typeorm';

@Injectable()
export class SpellsService {
  constructor(
    @InjectRepository(Spell) private spellsRepository: Repository<Spell>,
  ) {}
  async create(createSpellDto: CreateSpellDto) {
    const findSpell = await this.spellsRepository.findOne({
      where: {
        name: createSpellDto.name,
      },
    });
    if (findSpell) {
      throw new HttpException('This Spell alredy exist!', HttpStatus.CONFLICT);
    }
    return this.spellsRepository.save(createSpellDto);
  }

  async findAll() {
    return `This action returns all spells`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} spell`;
  }

  async update(id: number, updateSpellDto: UpdateSpellDto) {
    return `This action updates a #${id} spell`;
  }

  async remove(id: number) {
    return `This action removes a #${id} spell`;
  }
}
