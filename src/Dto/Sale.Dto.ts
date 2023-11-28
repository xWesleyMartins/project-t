import currency from 'currency.js';

export class SaleCreateDto {
  sale_price: currency;
  sale_status: string;
}

export class SaleUpdateDto extends SaleCreateDto {}
