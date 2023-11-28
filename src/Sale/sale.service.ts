import { Injectable, Inject } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { Sale } from './sale.entity';
import { SaleCreateDto, SaleUpdateDto } from '../Dto/Sale.Dto';
import { resultDto } from '../Dto/result.dto';

@Injectable()
export class SaleService {
  constructor(
    @Inject('SALE_REPOSITORY')
    private saleRepository: Repository<Sale>,
  ) {}

  async findOneSale(sale_id: number): Promise<Sale> {
    const findsale = await this.saleRepository.findOneBy({
      sale_id,
    });
    return findsale;
  }

  async findAll(): Promise<Sale[]> {
    return await this.saleRepository.find();
  }

  async registerSale(data: SaleCreateDto): Promise<resultDto> {
    return await this.saleRepository
      .save(data)
      .then(() => {
        return <resultDto>{
          status: true,
          message: 'Sucessfully registered Sale!',
        };
      })
      .catch(() => {
        return <resultDto>{
          status: false,
          message: 'Sale not registered!',
        };
      });
  }

  async update(id: number, saleUpdateDto: SaleUpdateDto): Promise<resultDto> {
    return this.saleRepository
      .update(id, saleUpdateDto)
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
    return await this.saleRepository.delete(id);
  }
}
