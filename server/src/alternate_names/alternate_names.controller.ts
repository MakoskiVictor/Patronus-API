import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlternateNamesService } from './alternate_names.service';
import { CreateAlternateNameDto } from './dto/create-alternate_name.dto';
import { UpdateAlternateNameDto } from './dto/update-alternate_name.dto';

@Controller('alternate-names')
export class AlternateNamesController {
  constructor(private readonly alternateNamesService: AlternateNamesService) {}

  @Post()
  create(@Body() createAlternateNameDto: CreateAlternateNameDto) {
    return this.alternateNamesService.create(createAlternateNameDto);
  }

  @Get()
  findAll() {
    return this.alternateNamesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alternateNamesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlternateNameDto: UpdateAlternateNameDto) {
    return this.alternateNamesService.update(+id, updateAlternateNameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alternateNamesService.remove(+id);
  }
}
