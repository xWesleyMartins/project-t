import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './Product/product.module';
import { CategoryModule } from './Category/category.module';
import { StockModule } from './Stock/stock.module';
import { SaleModule } from './Sale/sale.module';
import { ItemSaleModule } from './Item_Sale/itemsale.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
    }),
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
