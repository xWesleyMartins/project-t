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
    return await this.saleRepository.find({
      relations: ['itemSale'],
    });
  }

  async registerSale(data: SaleCreateDto): Promise<resultDto> {
    try {
      const sale = this.saleRepository.create(data);
      await this.saleRepository.save(sale);
      return <resultDto>{
        status: true,
        message: 'SUCCESS!',
        data: sale,
      };
    } catch (error) {
      return <resultDto>{
        status: false,
        message: error,
      };
    }
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
