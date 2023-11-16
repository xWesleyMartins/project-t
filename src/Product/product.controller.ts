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
import { resultDto } from './dto/result.dto';
import { ProductCreateDto } from './dto/product.create.dto';
import { ProductUpdateDto } from './dto/product.update.dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('/:id')
  public async findOne(@Param('id') product_id: number): Promise<Product> {
    const findID = await this.productService.findOne(product_id);
    console.log('CONTROLLER =>', findID);
    return findID;
  }

  @Get()
  public async findAll(): Promise<Product[] | null> {
    return await this.productService.findAll();
  }

  @Post('/create')
  async create(@Body() data: ProductCreateDto): Promise<resultDto> {
    return this.productService.create(data);
  }

  @Patch('/:id')
  async update(
    @Param('id') id: number,
    @Body() productUpdateDto: ProductUpdateDto,
  ): Promise<resultDto> {
    return this.productService.update(id, productUpdateDto);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return this.productService.delete(id);
  }
}
