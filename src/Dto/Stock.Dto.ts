import { Product } from 'src/Product/product.entity';

export class StockCreateDto {
  product: Product;
  amount: number;
}

export class StockUpdateDto extends StockCreateDto {}
