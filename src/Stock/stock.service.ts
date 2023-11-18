import { Injectable, Inject } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { Stock } from './stock.entity';
import { StockCreateDto, StockUpdateDto } from '../Dto/Stock.Dto';
import { resultDto } from '../Dto/result.dto';

@Injectable()
export class StockService {
  constructor(
    @Inject('STOCK_REPOSITORY')
    private stockRepository: Repository<Stock>,
  ) {}

  async findOne(stock_id: number): Promise<Stock> {
    const findstock = await this.stockRepository.findOneBy({
      stock_id,
    });
    return findstock;
  }

  async findAll(): Promise<Stock[]> {
    const findAll = await this.stockRepository.find();
    return findAll;
  }

  async create(data: StockCreateDto): Promise<resultDto> {
    const stock = new Stock();
    stock.stock_name = data.stock_name;
    return this.stockRepository
      .save(stock)
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

  async update(id: number, stockUpdateDto: StockUpdateDto): Promise<resultDto> {
    return this.stockRepository
      .update(id, stockUpdateDto)
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
    return await this.stockRepository.delete(id);
  }
}
