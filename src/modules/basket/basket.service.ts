import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  Scope,
} from '@nestjs/common';
import { BasketDto, DiscountBasketDto } from './dto/basket.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserBasketEntity } from './entities/basket.entity';
import { IsNull, Not, Repository } from 'typeorm';
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

  async addToBasket(createBasketDto: BasketDto) {
    const userId = this.req.user?.id;
    const { foodId } = createBasketDto;
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
      message: 'added food to your basket',
    };
  }
  async removeFromBasket(basketDto: BasketDto) {
    const userId = this.req.user?.id;
    const { foodId } = basketDto;
    const food = await this.menuService.getOne(foodId);
    let basketItem = await this.basketRepository.findOne({
      where: {
        userId,
        foodId,
      },
    });
    if (basketItem) {
      if (basketItem.count <= 1) {
        await this.basketRepository.delete({ id: basketItem.id });
      } else {
        basketItem.count -= 1;
      }
      await this.basketRepository.save(basketItem);
      return {
        message: 'remove item from basket successfully',
      };
    }
    throw new NotFoundException('cannot find any item');
  }
  async getBasket() {}
  async addDiscount(discountDto: DiscountBasketDto) {
    const { code } = discountDto;
    const userId = this.req.user?.id;
    const discount = await this.discountService.findOneByCode(code);
    if (!discount.active) {
      throw new BadRequestException('This discount code is not active');
    }
    if (discount.limit && discount.limit <= discount.usage) {
      throw new BadRequestException(
        'The capacity of this discount code is full',
      );
    }
    if (
      discount?.expires_in &&
      discount?.expires_in?.getTime() <= new Date().getTime()
    ) {
      throw new BadRequestException('this discount code is expired');
    }
    const userBasketDiscount = await this.basketRepository.findOneBy({
      discountId: discount.id,
      userId,
    });
    if (userBasketDiscount) {
      throw new BadRequestException('Already used discount');
    }
    if (discount.supplierId) {
      const discountOfSupplier = await this.basketRepository.findOne({
        relations: {
          discount: true,
        },
        where: {
          userId,
          discount: {
            supplierId: discount.supplierId,
          },
        },
      });
      if (discountOfSupplier) {
        throw new BadRequestException(
          'you can not use several of supplier discount ',
        );
      }
      const userBasket = await this.basketRepository.findOne({
        relations: {
          food: true,
        },
        where: {
          userId,
          food: {
            supplierId: discount.supplierId,
          },
        },
      });
      if (!userBasket) {
        throw new BadRequestException(
          'you can not use this discount code in basket',
        );
      }
    } else if (!discount.supplierId) {
      const generalDiscount = await this.basketRepository.findOne({
        relations: {
          discount: true,
        },
        where: {
          userId,
          discount: {
            id: Not(IsNull()),
            supplierId: IsNull(),
          },
        },
      });
      if (generalDiscount) {
        throw new BadRequestException('Already used general discount');
      }
    }
    await this.basketRepository.insert({
      discountId: discount.id,
      userId,
    });
    return {
      message: 'You added discount code successfully',
    };
  }
   async removeDiscount(discountDto: DiscountBasketDto) {
    const {code} = discountDto;
    const userId  = this.req.user?.id;
    const discount = await this.discountService.findOneByCode(code);
    const basketDiscount = await this.basketRepository.findOne({
      where: {
        discountId: discount.id,
      },
    });
    if (!basketDiscount)
      throw new BadRequestException("Not found discount in basket");

    await this.basketRepository.delete({discountId: discount.id, userId});
    return {
      message: "You deleted discount code successfully",
    };
  }
}
