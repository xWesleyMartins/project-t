import { DataSource } from 'typeorm';
import { ItemSale } from './itemsale.entity';

export const ItemSaleProviders = [
  {
    provide: 'ITEM_SALE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ItemSale),
    inject: ['DATA_SOURCE'],
  },
];
