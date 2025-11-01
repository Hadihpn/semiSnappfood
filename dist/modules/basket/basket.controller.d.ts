import { BasketService } from './basket.service';
import { BasketDto, DiscountBasketDto } from './dto/basket.dto';
export declare class BasketController {
    private readonly basketService;
    constructor(basketService: BasketService);
    addToBasket(createBasketDto: BasketDto): Promise<{
        message: string;
    }>;
    findAll(): string;
    findOne(id: string): string;
    remove(basketDto: BasketDto): Promise<{
        message: string;
    }> | undefined;
    addDiscountToBasket(discountDto: DiscountBasketDto): Promise<{
        message: string;
    }>;
    removeDiscountFromBasket(discountDto: DiscountBasketDto): Promise<{
        message: string;
    }>;
}
