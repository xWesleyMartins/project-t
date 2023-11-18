import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { resultDto } from '../Dto/result.dto';
import { ProductCreateDto, ProductUpdateDto } from '../Dto/Product.Dto';

@Controller('/product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('/findbyid/:id')
  public async findOne(@Param('id') product_id: number): Promise<Product> {
    const findId = await this.productService.findOne(product_id);
    return findId;
  }

  @Get('/findall')
  public async findAll(): Promise<Product[] | null> {
    return await this.productService.findAll();
  }

  @Post('/create')
  async create(@Body() data: ProductCreateDto): Promise<resultDto> {
    return this.productService.create(data);
  }

  @Patch('/update/:id')
  async update(
    @Param('id') id: number,
    @Body() productUpdateDto: ProductUpdateDto,
  ): Promise<resultDto> {
    return this.productService.update(id, productUpdateDto);
  }

  @Delete('/delete/:id')
  async delete(@Param('id') id: number) {
    return this.productService.delete(id);
  }
}
