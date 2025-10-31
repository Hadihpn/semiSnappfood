import { BasketService } from './basket.service';
export declare class BasketController {
    private readonly basketService;
    constructor(basketService: BasketService);
    findAll(): string;
    findOne(id: string): string;
    remove(id: string): string;
}
