import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VetementsService } from './vetements.service';
import { CreateVetementDto } from './dto/create-vetement.dto';
import { UpdateVetementDto } from './dto/update-vetement.dto';

@Controller('vetements')
export class VetementsController {
  constructor(private readonly vetementsService: VetementsService) {}

  @Post()
  create(@Body() createVetementDto: CreateVetementDto) {
    return this.vetementsService.create(createVetementDto);
  }

  @Get()
  findAll() {
    return this.vetementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vetementsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVetementDto: UpdateVetementDto) {
    return this.vetementsService.update(+id, updateVetementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vetementsService.remove(+id);
  }
}
