import { Category } from 'src/Category/category.entity';

export class ProductCreateDto {
  product_name: string;
  Category: Category;
}

export class ProductUpdateDto extends ProductCreateDto {}
