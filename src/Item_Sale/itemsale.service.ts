import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemSale } from './itemsale.entity';
@Injectable()
export class ItemSaleService {
  constructor(
    @InjectRepository(ItemSale)
    private itemSaleRepository: Repository<ItemSale>,
  ) {}

  async findAll(): Promise<ItemSale[]> {
    return await this.itemSaleRepository.find();
  }

  async findItemSaleById(itemSale_id: number): Promise<ItemSale> {
    return await this.itemSaleRepository.findOneBy({ itemSale_id });
  }
}
