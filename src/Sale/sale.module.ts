import { Module } from '@nestjs/common';
import { DatabaseModule } from '../Database/database.module';
import { saleProviders } from './sale.providers';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [SaleController],
  providers: [...saleProviders, SaleService],
})
export class SaleModule {}
