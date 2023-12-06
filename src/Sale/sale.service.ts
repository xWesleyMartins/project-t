import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Sale } from './sale.entity';
import { SaleCreateDto, SaleUpdateDto } from '../Dto/Sale.Dto';
import { resultDto } from '../Dto/result.dto';
import { Stock } from 'src/Stock/stock.entity';
@Injectable()
export class SaleService {
  constructor(
    @InjectRepository(Sale)
    private saleRepository: Repository<Sale>,
    @InjectRepository(Stock)
    private stockRepository: Repository<Stock>,
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
      for (const item of sale.itemSale) {
        const response = await this.stockRepository.findOneBy({
          product: { product_id: item.product.product_id },
        });
        if (response && response.amount >= item.sold_amount) {
          response.amount -= item.sold_amount;
          await this.stockRepository.save(response);
        } else {
          return <resultDto>{
            status: false,
            message: 'Insufficient stock for sale.',
          };
        }
      }
      await this.saleRepository.save(sale);
      return <resultDto>{
        status: true,
        message: 'SALE MADE SUCCESSFULLY!',
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
