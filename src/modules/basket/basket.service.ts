import { Inject, Injectable, Scope } from '@nestjs/common';
import { BasketDto } from './dto/basket.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserBasketEntity } from './entities/basket.entity';
import { Repository } from 'typeorm';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
// import { DiscountEntity } from '../discount/entities/dicount.entity';
import { MenuService } from '../menu/service/menu.service';
import { DiscountEntity } from '../discount/entities/dicount.entity';
import { DiscountService } from '../discount/dicount.service';
// import { DiscountService } from '../discount/dicount.service';
// import {  } from './dto/basket.dto';

@Injectable({ scope: Scope.REQUEST })
export class BasketService {
  constructor(
    @InjectRepository(UserBasketEntity)
    private basketRepository: Repository<UserBasketEntity>,
    @InjectRepository(DiscountEntity)
    private discountRepository: Repository<DiscountEntity>,
    private menuService: MenuService,
    private discountService: DiscountService,
    @Inject(REQUEST) private req: Request,
  ) {}
  // create(createBasketDto: CreateBasketDto) {
  //   return 'This action adds a new basket';
  // }

  findAll() {
    return `This action returns all basket`;
  }

  findOne(id: number) {
    return `This action returns a #${id} basket`;
  }

  // update(id: number, updateBasketDto: UpdateBasketDto) {
  //   return `This action updates a #${id} basket`;
  // }

  remove(id: number) {
    return `This action removes a #${id} basket`;
  }

  async addToBasket(createBasketDto: BasketDto) {
     const userId = this.req.user?.id;
    const {foodId} = createBasketDto;
    const food = await this.menuService.getOne(foodId);
    let basketItem = await this.basketRepository.findOne({
      where: {
        userId,
        foodId,
      },
    });
    if (basketItem) {
      basketItem.count += 1;
    } else {
      basketItem = this.basketRepository.create({
        foodId,
        userId,
        count: 1,
      });
    }
    await this.basketRepository.save(basketItem);
    return {
      message: "added food to your basket",
    };
  }
  async removeFromBasket() {}
  async getBasket() {}
  async addDiscount() {}
  async removeDiscount() {}
}
