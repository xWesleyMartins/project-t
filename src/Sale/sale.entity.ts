import currency from 'currency.js';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
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
}
