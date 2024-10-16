import { 
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: String

    @Column({type: 'varchar'})
    name: String

    @Column({type: 'float'})
    price: Number

    @Column({type: 'varchar'})
    description: String

    @Column({type: 'integer'})
    quantity: Number
}
