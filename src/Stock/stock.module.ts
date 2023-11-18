import { Module } from '@nestjs/common';
import { DatabaseModule } from '../Database/database.module';
import { stockProviders } from './stock.providers';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [StockController],
  providers: [...stockProviders, StockService],
})
export class StockModule {}
