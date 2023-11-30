import { Module } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from './sale.entity';
import { ItemSale } from 'src/Item_Sale/itemsale.entity';
import { Stock } from 'src/Stock/stock.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sale, ItemSale, Stock])],
  controllers: [SaleController],
  providers: [SaleService],
})
export class SaleModule {}
