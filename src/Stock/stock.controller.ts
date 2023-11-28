import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  // Patch,
  Post,
} from '@nestjs/common';
import { StockService } from './stock.service';
import { Stock } from './stock.entity';
import { resultDto } from '../Dto/result.dto';
import { StockCreateDto } from '../Dto/Stock.Dto';

@Controller('/stock')
export class StockController {
  constructor(private stockService: StockService) {}

  @Get('/findCurrentByProduct/:id')
  public async findCurrentByProduct(
    @Param('id') productId: number,
  ): Promise<Stock> {
    const findId = await this.stockService.findCurrentByProduct(productId);
    return findId;
  }

  @Get('/findall')
  public async findAll(): Promise<Stock[] | null> {
    return await this.stockService.findAll();
  }

  @Post('/create')
  async create(@Body() data: StockCreateDto): Promise<resultDto> {
    return this.stockService.create(data);
  }

  @Delete('/delete/:id')
  async delete(@Param('id') id: number) {
    return this.stockService.delete(id);
  }
}
