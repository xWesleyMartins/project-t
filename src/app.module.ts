import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './Product/product.module';
import { CategoryModule } from './Category/category.module';
import { StockModule } from './Stock/stock.module';
import { SaleModule } from './Sale/sale.module';
import { ItemSaleModule } from './Item_Sale/itemsale.module';

@Module({
  imports: [
    ProductModule,
    CategoryModule,
    StockModule,
    SaleModule,
    ItemSaleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
