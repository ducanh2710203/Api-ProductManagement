import {
    Column,
    Entity,
    PrimaryGeneratedColumn
} from "typeorm";
@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    public readonly id : number
    @Column("varchar")
    public name : string
    @Column()
    public price : number
    @Column("varchar")
    public author : string
    @Column("varchar")
    public avatar : string
}
