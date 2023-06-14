import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CommandesService } from './commandes.service';
import { CreateCommandeDto } from './dto/create-commande.dto';
import { UpdateCommandeDto } from './dto/update-commande.dto';

@Controller('commandes')
export class CommandesController {
  constructor(private readonly commandesService: CommandesService) {}

  @Post()
  create(@Body() createCommandeDto: CreateCommandeDto) {
    console.log(createCommandeDto);
      return this.commandesService.createCommande(createCommandeDto);
  }

  @Get('/getAll')
  findAll() {
    return this.commandesService.findAllCommande();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commandesService.findOneCommande(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCommandeDto: UpdateCommandeDto,
  ) {
    return this.commandesService.updateCommande(+id, updateCommandeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commandesService.removeCommande(+id);
  }
}
