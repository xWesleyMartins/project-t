// import { Product } from 'src/Product/product.entity';
import { Product } from 'src/Product/product.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  // OneToMany,
  // ManyToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Stock {
  @PrimaryGeneratedColumn()
  stock_id: number;

  @Column()
  amount: number; // quantidade

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn() // data da ultima movimentação, talvez?
  updated_date: Date;

  @ManyToOne(() => Product, (product) => product.stock)
  product: Product;
}
