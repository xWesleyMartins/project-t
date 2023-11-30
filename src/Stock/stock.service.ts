import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Stock } from './stock.entity';
import { StockCreateDto } from '../Dto/Stock.Dto';
import { resultDto } from '../Dto/result.dto';

@Injectable()
export class StockService {
  constructor(
    @InjectRepository(Stock)
    private stockRepository: Repository<Stock>,
  ) {}

  async findCurrentByProduct(product_id: number): Promise<Stock> {
    const findProductInStock = await this.stockRepository.findOne({
      where: [{ product: { product_id } }],
      order: { created_date: 'DESC' },
    });
    return findProductInStock;
  }

  async findAll(): Promise<Stock[]> {
    const findAll = await this.stockRepository.find({
      relations: {
        product: true,
      },
      select: {
        product: {
          product_id: true,
          product_name: true,
        },
      },
    });
    return findAll;
  }

  async create(data: StockCreateDto): Promise<resultDto> {
    return this.stockRepository
      .save(data)
      .then(() => {
        return <resultDto>{
          status: true,
          message: 'success!',
        };
      })
      .catch(() => {
        return <resultDto>{
          status: false,
          message: 'stock already exists!',
        };
      });
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.stockRepository.delete(id);
  }
}
