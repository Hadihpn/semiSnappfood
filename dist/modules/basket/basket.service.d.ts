import { BasketDto } from './dto/basket.dto';
import { UserBasketEntity } from './entities/basket.entity';
import { Repository } from 'typeorm';
import { Request } from 'express';
import { MenuService } from '../menu/service/menu.service';
import { DiscountEntity } from '../discount/entities/dicount.entity';
import { DiscountService } from '../discount/dicount.service';
export declare class BasketService {
    private basketRepository;
    private discountRepository;
    private menuService;
    private discountService;
    private req;
    constructor(basketRepository: Repository<UserBasketEntity>, discountRepository: Repository<DiscountEntity>, menuService: MenuService, discountService: DiscountService, req: Request);
    findAll(): string;
    findOne(id: number): string;
    remove(id: number): string;
    addToBasket(createBasketDto: BasketDto): Promise<{
        message: string;
    }>;
    removeFromBasket(): Promise<void>;
    getBasket(): Promise<void>;
    addDiscount(): Promise<void>;
    removeDiscount(): Promise<void>;
}
