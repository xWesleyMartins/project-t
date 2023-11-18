import { Category } from 'src/Category/category.entity';
import { Stock } from 'src/Stock/stock.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  product_id: number;
  @Column({ length: 500, unique: true })
  product_name: string;

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  updated_date: Date;

  @ManyToOne(() => Category, (category) => category.product)
  category: Category;

  @ManyToOne(() => Stock, (stock) => stock.product)
  stock: Stock;
}
