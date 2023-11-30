import { Module } from '@nestjs/common';
import { DatabaseModule } from '../Database/database.module';
import { ItemSaleProviders } from './itemsale.providers';
import { ItemSaleService } from './itemsale.service';
import { ItemSaleController } from './itemsale.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ItemSaleController],
  providers: [...ItemSaleProviders, ItemSaleService],
})
export class ItemSaleModule {}
