import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './Product/product.module';
import { CategoryModule } from './Category/category.module';
import { StockModule } from './Stock/stock.module';

@Module({
  imports: [ProductModule, CategoryModule, StockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
