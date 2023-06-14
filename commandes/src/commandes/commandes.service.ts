import { Injectable } from '@nestjs/common';
import { CreateCommandeDto } from './dto/create-commande.dto';
import { UpdateCommandeDto } from './dto/update-commande.dto';
import { Commande } from './entities/commande.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommandesRepository } from './repository/commandes.repository';
import { CommandeDto } from './dto/commande.dto';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class CommandesService {
  constructor(private commandeRepository : CommandesRepository, private readonly httpService: HttpService){}

  createCommande(createCommandeDto: CreateCommandeDto) {
    const result = this.httpService.get(`http://localhost:3001/vetements/${createCommandeDto.id_vetements}`).subscribe(res => {
      console.log(res)
    });
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
