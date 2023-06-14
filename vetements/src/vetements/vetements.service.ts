import { Injectable } from '@nestjs/common';
import { CreateVetementDto } from './dto/create-vetement.dto';
import { UpdateVetementDto } from './dto/update-vetement.dto';
import { Vetement } from './entities/vetement.entity';
import { VetementRepository } from './vetement.repository';
@Injectable()
export class VetementsService {
  constructor(private  vetementRepository: VetementRepository) {}
  create(createVetementDto: CreateVetementDto) {
    return 'This action adds a new vetement';
  }

  findAll(): Promise<Vetement[]> {
    const s =  this.vetementRepository.find();
      return  s
  }


  findOne(id: number) {
    return `This action returns a #${id} vetement`;
  }

  update(id: number, updateVetementDto: UpdateVetementDto) {
    return `This action updates a #${id} vetement`;
  }

  remove(id: number) {
    return `This action removes a #${id} vetement`;
  }
}
