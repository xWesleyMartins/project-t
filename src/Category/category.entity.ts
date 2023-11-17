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
export class Category {
  @PrimaryGeneratedColumn()
  category_id: number;
  // id: number;
  @Column({
    length: 500,
    unique: true,
  })
  category_name: string;

  // @Column({ length: 500 })
  // category_category: string;

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  updated_date: Date;

  @OneToMany(() => Product, (product) => product.category)
  product: Product[];
}
