import { Repository } from 'typeorm';
import { Commande } from '../entities/commande.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CommandeDto } from '../dto/commande.dto';
import { UpdateCommandeDto } from '../dto/update-commande.dto';

export class CommandesRepository {
  constructor(
    @InjectRepository(Commande)
    private commandeRepository: Repository<Commande>,
  ) {}

  create(createCommandeDto: CommandeDto) {
    console.log('service :');
    console.log(createCommandeDto);
    return this.commandeRepository.save(createCommandeDto);
  }

  findAll() {
    return this.commandeRepository.find();
  }

  findOne(id: number) {
    return this.commandeRepository.findOneBy({ id_commande: id });
  }

  update(id: number, updateCommandeDto: UpdateCommandeDto) {
    return this.commandeRepository.update(id, updateCommandeDto);
  }

  remove(id: number) {
    return this.commandeRepository.delete(id);
  }
}
