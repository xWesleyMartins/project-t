import currency from 'currency.js';
import { ItemSale } from 'src/Item_Sale/itemsale.entity';

export class SaleCreateDto {
  itemSale: ItemSale[];
  sale_price: currency;
  sale_status: string;
}

export class SaleUpdateDto extends SaleCreateDto {}
