import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './Product/product.module';
import { CategoryModule } from './Category/category.module';
import { StockModule } from './Stock/stock.module';
import { SaleModule } from './Sale/sale.module';
import { ItemSale } from './Item_Sale/itemsale.entity';

@Module({
  imports: [ProductModule, CategoryModule, StockModule, SaleModule, ItemSale],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
