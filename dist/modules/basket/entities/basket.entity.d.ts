import { DiscountEntity } from 'src/modules/discount/entities/dicount.entity';
import { MenuEntity } from 'src/modules/menu/entities/menu.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
export declare class UserBasketEntity {
    id: number;
    foodId: number;
    userId: number;
    count: number;
    type: string;
    discountId: number;
    created_at: Date;
    food: MenuEntity;
    user: UserEntity;
    discount: DiscountEntity;
}
