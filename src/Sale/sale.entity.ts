import currency from 'currency.js';
import { ItemSale } from 'src/Item_Sale/itemsale.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  sale_id: number;

  @Column('decimal', {
    precision: 12,
    scale: 2,
  })
  sale_price: currency;

  @Column()
  sale_status: string;

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  updated_date: Date;

  @OneToMany(() => ItemSale, (itemSale) => itemSale.product, {
    cascade: true,
    eager: true,
  })
  itemSale: ItemSale[];
}
