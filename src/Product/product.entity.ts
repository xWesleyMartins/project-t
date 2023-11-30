import { Category } from 'src/Category/category.entity';
// import { Sale } from 'src/Sale/sale.entity';
import { Stock } from 'src/Stock/stock.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import * as currency from 'currency.js';
import { ItemSale } from 'src/Item_Sale/itemsale.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column({ length: 500, unique: true })
  product_name: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  price: currency;

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  updated_date: Date;

  @ManyToOne(() => Category, (category) => category.product)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @OneToMany(() => Stock, (stock) => stock.product)
  stock: Stock[];

  @OneToMany(() => ItemSale, (itemSale) => itemSale.product)
  itemSale: ItemSale[];
}
