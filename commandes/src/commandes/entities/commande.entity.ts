import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Commande {
    
    @PrimaryGeneratedColumn()
    id_commande: number;

    @Column()
    num_commande:number;

    @Column()
    num_client: number;

    @Column()
    transporteur: string;
    
    @Column()
    date_livraison: string;

    @Column()
    id_vetements: number;
}
