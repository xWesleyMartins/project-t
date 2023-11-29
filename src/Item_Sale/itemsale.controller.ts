import {
  Controller,
  // Body,
  // Delete,
  Get,
  Param,
  // Patch,
  // Post,
} from '@nestjs/common';
import { ItemSaleService } from './itemsale.service';
import { ItemSale } from './itemsale.entity';
// import { resultDto } from '../Dto/result.dto';
// import { SaleCreateDto, SaleUpdateDto } from '../Dto/Sale.Dto';

@Controller('/itemsale')
export class ItemSaleController {
  constructor(private itemSaleService: ItemSaleService) {}

  @Get('/findall')
  public async findAll(): Promise<ItemSale[] | null> {
    return await this.itemSaleService.findAll();
  }

  @Get('/finditemsale/:id')
  public async findOne(@Param('id') id: number): Promise<ItemSale> {
    const findId = await this.itemSaleService.findItemSaleById(id);
    return findId;
  }

  // @Post('/registersale')
  // async registerSale(@Body() data: SaleCreateDto): Promise<resultDto> {
  //   return this.saleItemService.registerSale(data);
  // }

  // @Patch('/update/:id')
  // async update(
  //   @Param('id') id: number,
  //   @Body() saleUpdateDto: SaleUpdateDto,
  // ): Promise<resultDto> {
  //   return this.saleItemService.update(id, saleUpdateDto);
  // }

  // @Delete('/delete/:id')
  // async delete(@Param('id') id: number) {
  //   return this.saleItemService.delete(id);
  // }
}
