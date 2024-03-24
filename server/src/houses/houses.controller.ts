import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { HousesService } from './houses.service';
import { CreateHouseDto } from './dto/create-house.dto';
import { UpdateHouseDto } from './dto/update-house.dto';

@Controller('houses')
export class HousesController {
  constructor(private readonly housesService: HousesService) {}

  @Post()
  create(@Body() createHouseDto: CreateHouseDto) {
    return this.housesService.create(createHouseDto);
  }

  @Post('recover')
  recover(@Body() updateHouseDto: UpdateHouseDto) {
    return this.housesService.recoverHouse(updateHouseDto);
  }

  @Get()
  findAll() {
    return this.housesService.findAll();
  }

  // ParseUUIDPipe para comprobara que el param cumple el formato
  @Get(':uuid')
  findOne(@Param('uuid', ParseUUIDPipe) uuid: string) {
    return this.housesService.findOne(uuid);
  }

  @Get('name/:name')
  findSeveralByName(@Param('name') name: string) {
    return this.housesService.findByName(name);
  }

  @Patch(':uuid')
  update(
    @Param('uuid', ParseUUIDPipe) uuid: string,
    @Body() updateHouseDto: UpdateHouseDto,
  ) {
    return this.housesService.update(uuid, updateHouseDto);
  }

  @Delete(':uuid')
  remove(@Param('uuid', ParseUUIDPipe) uuid: string) {
    return this.housesService.remove(uuid);
  }
}
