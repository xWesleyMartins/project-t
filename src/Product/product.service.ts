import { Injectable, Inject } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { Product } from './product.entity';
import { ProductCreateDto, ProductUpdateDto } from '../Dto/Product.Dto';
import { resultDto } from '../Dto/result.dto';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<Product>,
  ) {}

  async findOne(product_id: number): Promise<Product> {
    const findproduct = await this.productRepository.findOneBy({
      product_id,
    });
    return findproduct;
  }

  async findAll(): Promise<Product[]> {
    const findAll = await this.productRepository.find({
      relations: {
        category: true,
      },
      select: {
        category: {
          category_name: true,
        },
      },
    });
    return findAll;
  }

  async create(data: ProductCreateDto): Promise<resultDto> {
    const product = new Product();
    product.product_name = data.product_name;
    product.price = data.price;
    product.category = data.category;
    return this.productRepository
      .save(product)
      .then(() => {
        return <resultDto>{
          status: true,
          message: 'success!',
        };
      })
      .catch(() => {
        return <resultDto>{
          status: false,
          message: 'product already exists!',
        };
      });
  }

  async update(
    id: number,
    productUpdateDto: ProductUpdateDto,
  ): Promise<resultDto> {
    return this.productRepository
      .update(id, productUpdateDto)
      .then(() => {
        return <resultDto>{
          status: true,
          message: 'SUCCESS!',
        };
      })
      .catch(() => {
        return <resultDto>{
          status: false,
          message: 'FAIL',
        };
      });
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.productRepository.delete(id);
  }
}
