// export class Vetement {}
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vetement {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom:number;

    @Column()
    prix: number;

    @Column()
    quantite: number;
    
    
}
