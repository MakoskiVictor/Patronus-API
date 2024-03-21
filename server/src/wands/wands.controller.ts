import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WandsService } from './wands.service';
import { CreateWandDto } from './dto/create-wand.dto';
import { UpdateWandDto } from './dto/update-wand.dto';

@Controller('wands')
export class WandsController {
  constructor(private readonly wandsService: WandsService) {}

  @Post()
  create(@Body() createWandDto: CreateWandDto) {
    return this.wandsService.create(createWandDto);
  }

  @Get()
  findAll() {
    return this.wandsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wandsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWandDto: UpdateWandDto) {
    return this.wandsService.update(+id, updateWandDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wandsService.remove(+id);
  }
}
