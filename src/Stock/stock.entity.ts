import { Product } from 'src/Product/product.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Stock {
  @PrimaryGeneratedColumn()
  stock_id: number;

  @Column()
  amount: number;

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  updated_date: Date;

  @ManyToOne(() => Product, (product) => product.stock)
  product: Product;
}
