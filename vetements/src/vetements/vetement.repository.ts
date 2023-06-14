import { EntityRepository, Repository,EntityManager, Any  } from 'typeorm';
import { Vetement } from './entities/vetement.entity';

@EntityRepository(Vetement)
export class VetementRepository  {
  constructor(private manager: EntityManager) { }

  async find() {
    return this.manager.find(Vetement);
  } 
}
