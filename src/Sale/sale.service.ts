import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Sale } from './sale.entity';
import { SaleCreateDto, SaleUpdateDto } from '../Dto/Sale.Dto';
import { resultDto } from '../Dto/result.dto';
import { Stock } from 'src/Stock/stock.entity';
import { ItemSale } from 'src/Item_Sale/itemsale.entity';
@Injectable()
export class SaleService {
  constructor(
    @InjectRepository(Sale)
    private saleRepository: Repository<Sale>,
    @InjectRepository(ItemSale)
    private itemSaleRepository: Repository<ItemSale>,
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

  async findSalesByProductId(product_id: number): Promise<ItemSale[]> {
    const findByProduct = await this.itemSaleRepository.find({
      where: { product: { product_id: product_id } },
    });

    return findByProduct;
  }

  async registerSale(data: SaleCreateDto): Promise<resultDto> {
    try {
      const sale = this.saleRepository.create(data);
      const noItemsInStock = [];
      for (const item of sale.itemSale) {
        const response = await this.stockRepository.findOneBy({
          product: { product_id: item.product.product_id },
        });
        if (!response) {
          throw new Error(
            `product_id: "${item.product.product_id}" not found in stock`,
          );
        }
        if (response.amount >= item.sold_amount) {
          response.amount -= item.sold_amount;
          await this.stockRepository.save(response);
        } else {
          // const totalPrice = (
          //   Number(item.sold_amount) * Number(item.unit_price)
          // ).toFixed(2);
          noItemsInStock.push({
            product: {
              product_id: item.product.product_id,
              quantity_demanded: item.sold_amount,
              quantity_in_stock: response.amount,
              difference: item.sold_amount - response.amount,
              // total_price: totalPrice,
            },
          });
          console.log(noItemsInStock);
        }
      }
      if (noItemsInStock.length > 0) {
        return <resultDto>{
          status: false,
          message: 'product out of stock',
          data: noItemsInStock,
        };
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
