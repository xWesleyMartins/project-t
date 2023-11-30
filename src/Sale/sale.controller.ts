import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SaleService } from './sale.service';
import { Sale } from './sale.entity';
import { resultDto } from '../Dto/result.dto';
import { SaleCreateDto, SaleUpdateDto } from '../Dto/Sale.Dto';

@Controller('/sale')
export class SaleController {
  constructor(private saleService: SaleService) {}

  @Get('/findbysaleid/:id')
  public async findOne(@Param('id') sale_id: number): Promise<Sale> {
    const findId = await this.saleService.findOneSale(sale_id);
    return findId;
  }

  // @Get('/findOneSaleid/:id')
  // public async findOneSaleid(@Param('id') sale_id: number): Promise<Sale[]> {
  //   const findId = await this.saleService.findItemsBySaleId(sale_id);
  //   return findId;
  // }

  @Get('/findall')
  public async findAll(): Promise<Sale[] | null> {
    return await this.saleService.findAll();
  }

  @Post('/registersale')
  async registerSale(@Body() data: SaleCreateDto): Promise<resultDto> {
    return this.saleService.registerSale(data);
  }

  @Patch('/update/:id')
  async update(
    @Param('id') id: number,
    @Body() saleUpdateDto: SaleUpdateDto,
  ): Promise<resultDto> {
    return this.saleService.update(id, saleUpdateDto);
  }

  @Delete('/delete/:id')
  async delete(@Param('id') id: number) {
    return this.saleService.delete(id);
  }
}
