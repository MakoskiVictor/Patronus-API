import { Controller, Post, Body, Patch, Param } from '@nestjs/common';
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

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWandDto: UpdateWandDto) {
    return this.wandsService.update(+id, updateWandDto);
  }
}
