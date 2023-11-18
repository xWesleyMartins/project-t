import { Product } from 'src/Product/product.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Stock {
  @PrimaryGeneratedColumn()
  stock_id: number;

  @Column({ unique: true, length: 500 })
  stock_name: string;

  // @Column()        //ainda nao sei como aplicar aplicar a forma de preenchimento dessa coluna  =/
  // amount: number; // Talvez quando tabela Vendas estiver sendo feita fique mais claro pra mim =')

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn() // data da ultima movimentação, talvez?
  updated_date: Date;

  @OneToMany(() => Product, (product) => product.stock)
  product: Product[];
}
