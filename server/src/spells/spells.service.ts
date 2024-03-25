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

  // ---------- CREATE ----------
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

  // ---------- FIND ----------
  async findAll() {
    const findSpells = await this.spellsRepository.find({
      select: ['id', 'name', 'description'],
    });
    if (findSpells.length === 0) {
      throw new HttpException('There are no spells yet!', HttpStatus.NOT_FOUND);
    }
    return findSpells;
  }

  // ---------- FIND ONE ----------
  async findOne(uuid: string) {
    const findSpell = await this.spellsRepository.findOne({
      where: {
        id: uuid,
      },
      select: ['id', 'name', 'description', 'characters'],
    });
    if (!findSpell) {
      throw new HttpException('Spell not found!', HttpStatus.NOT_FOUND);
    }

    return findSpell;
  }

  // ---------- UPDATE ----------
  async update(uuid: string, updateSpellDto: UpdateSpellDto) {
    const findSpell = await this.spellsRepository.findOne({
      where: {
        id: uuid,
      },
    });
    if (!findSpell) {
      throw new HttpException('Spell not found!', HttpStatus.NOT_FOUND);
    }

    await this.spellsRepository.update(uuid, updateSpellDto);
    return { status: 201, message: 'Spell updated successfully!' };
  }

  // ---------- REMOVE ----------
  async remove(uuid: string) {
    const findSpell = await this.spellsRepository.findOne({
      where: {
        id: uuid,
      },
    });
    if (!findSpell) {
      throw new HttpException('Spell not found!', HttpStatus.NOT_FOUND);
    }
    await this.spellsRepository.softDelete({
      id: uuid,
    });

    return { status: 204 };
  }
}
