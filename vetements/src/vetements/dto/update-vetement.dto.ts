import { PartialType } from '@nestjs/mapped-types';
import { CreateVetementDto } from './create-vetement.dto';

export class UpdateVetementDto extends PartialType(CreateVetementDto) {}
