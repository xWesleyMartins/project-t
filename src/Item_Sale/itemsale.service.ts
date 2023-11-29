import { Injectable, Inject } from '@nestjs/common';
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
    @Inject('ITEM_SALE_REPOSITORY')
    private itemSaleRepository: Repository<ItemSale>,
  ) {}

  async findAll(): Promise<ItemSale[]> {
    return await this.itemSaleRepository.find();
  }

  async findItemSaleById(id: number): Promise<ItemSale> {
    return await this.itemSaleRepository.findOneBy({ id });
  }

  //   async registerSale(data: SaleCreateDto): Promise<resultDto> {
  //     return await this.saleRepository
  //       .save(data)
  //       .then(() => {
  //         return <resultDto>{
  //           status: true,
  //           message: 'Sucessfully registered Sale!',
  //         };
  //       })
  //       .catch(() => {
  //         return <resultDto>{
  //           status: false,
  //           message: 'Sale not registered!',
  //         };
  //       });
  //   }

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
