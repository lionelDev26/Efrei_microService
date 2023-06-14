import { Injectable } from '@nestjs/common';
import { CreateVetementDto } from './dto/create-vetement.dto';
import { UpdateVetementDto } from './dto/update-vetement.dto';

@Injectable()
export class VetementsService {
  create(createVetementDto: CreateVetementDto) {
    return 'This action adds a new vetement';
  }

  findAll() {
    return `This action returns all vetements`;
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
