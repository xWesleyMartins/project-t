import currency from 'currency.js';
import { Category } from 'src/Category/category.entity';

export class ProductCreateDto {
  product_name: string;
  price: currency;
  category: Category;
}

export class ProductUpdateDto extends ProductCreateDto {}
