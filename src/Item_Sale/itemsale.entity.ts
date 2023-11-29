import currency from 'currency.js';
import { Product } from 'src/Product/product.entity';
import { Sale } from 'src/Sale/sale.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class ItemSale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer')
  sold_amount: number;

  @Column('decimal', {
    precision: 12,
    scale: 2,
    nullable: true,
  })
  unit_price: currency;

  @ManyToOne(() => Product, (product) => product.itemSale)
  product: Product;

  @ManyToOne(() => Sale, (sale) => sale.itemSale, { onDelete: 'CASCADE' })
  sale: Sale;

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  updated_date: Date;
}
