import { DataSource } from 'typeorm';
import { Sale } from './sale.entity';

export const saleProviders = [
  {
    provide: 'SALE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Sale),
    inject: ['DATA_SOURCE'],
  },
];
