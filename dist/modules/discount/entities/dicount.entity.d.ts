import { UserBasketEntity } from 'src/modules/basket/entities/basket.entity';
import { MenuEntity } from 'src/modules/menu/entities/menu.entity';
export declare class DiscountEntity {
    id: number;
    code: string;
    percent: number;
    amount: number;
    start_in: Date;
    expires_in: Date;
    limit: number;
    usage: number;
    supplierId: number;
    active: boolean;
    food: MenuEntity;
    baskets: UserBasketEntity[];
}
