import { Module } from '@nestjs/common';
import { ItemSaleService } from './itemsale.service';
import { ItemSaleController } from './itemsale.controller';
import { ItemSale } from './itemsale.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ItemSale])],
  controllers: [ItemSaleController],
  providers: [ItemSaleService],
})
export class ItemSaleModule {}
