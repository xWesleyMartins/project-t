import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  // DeleteResult,
  Repository,
} from 'typeorm';
import { ItemSale } from './itemsale.entity';
// import { SaleCreateDto, SaleUpdateDto } from '../Dto/Sale.Dto';
// import { resultDto } from '../Dto/result.dto';

@Injectable()
export class ItemSaleService {
  constructor(
    @InjectRepository(ItemSale)
    private itemSaleRepository: Repository<ItemSale>,
  ) {}

  async findAll(): Promise<ItemSale[]> {
    return await this.itemSaleRepository.find();
  }

  async findItemSaleById(id: number): Promise<ItemSale> {
    return await this.itemSaleRepository.findOneBy({ id });
  }

  // async findItemsBySaleId(): Promise<ItemSale[]> {
  //   const sale = await this.itemSaleRepository.find({
  //     relations: {
  //       product: true,
  //       sale: true,
  //     },
  //     select: {
  //       product: {
  //         product_name: true,
  //       },
  //     },
  //     // select: {
  //     //   itemSale: {
  //     //     relations: {
  //     //       product: true,
  //     //     },
  //     //   },
  //     // },
  //   });
  //   return sale;
  // }

  //   async update(id: number, saleUpdateDto: SaleUpdateDto): Promise<resultDto> {
  //     return this.saleRepository
  //       .update(id, saleUpdateDto)
  //       .then(() => {
  //         return <resultDto>{
  //           status: true,
  //           message: 'SUCCESS!',
  //         };
  //       })
  //       .catch(() => {
  //         return <resultDto>{
  //           status: false,
  //           message: 'FAIL',
  //         };
  //       });
  //   }

  //   async delete(id: number): Promise<DeleteResult> {
  //     return await this.saleRepository.delete(id);
  //   }
}
