import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { StockService } from './stock.service';
import { Stock } from './stock.entity';
import { resultDto } from '../Dto/result.dto';
import { StockCreateDto, StockUpdateDto } from '../Dto/Stock.Dto';

@Controller('/stock')
export class StockController {
  constructor(private stockService: StockService) {}

  @Get('/findbyid/:id')
  public async findOne(@Param('id') stock_id: number): Promise<Stock> {
    const findId = await this.stockService.findOne(stock_id);
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

  @Patch('/update/:id')
  async update(
    @Param('id') id: number,
    @Body() stockUpdateDto: StockUpdateDto,
  ): Promise<resultDto> {
    return this.stockService.update(id, stockUpdateDto);
  }

  @Delete('/delete/:id')
  async delete(@Param('id') id: number) {
    return this.stockService.delete(id);
  }
}
