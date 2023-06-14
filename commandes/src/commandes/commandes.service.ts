import { Injectable } from '@nestjs/common';
import { CreateCommandeDto } from './dto/create-commande.dto';
import { UpdateCommandeDto } from './dto/update-commande.dto';
import { Commande } from './entities/commande.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommandesRepository } from './repository/commandes.repository';
import { CommandeDto } from './dto/commande.dto';

@Injectable()
export class CommandesService {
  constructor(private commandeRepository : CommandesRepository){}

  createCommande(createCommandeDto: CreateCommandeDto) {
    return this.commandeRepository.create(createCommandeDto);
  }

  findAllCommande() {
    return this.commandeRepository.findAll();
  }

  findOneCommande(id: number) {
    return this.commandeRepository.findOne(id);
  }

  updateCommande(id: number, updateCommandeDto: UpdateCommandeDto) {
    return this.commandeRepository.update(id,updateCommandeDto);
  }

  removeCommande(id: number) {
    return this.commandeRepository.remove(id);
  }
}
