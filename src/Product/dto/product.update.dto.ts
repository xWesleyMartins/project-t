import { ProductCreateDto } from './product.create.dto';

export interface ProductUpdateDto extends ProductCreateDto {
  product_name: string;
  product_category: string;
}
