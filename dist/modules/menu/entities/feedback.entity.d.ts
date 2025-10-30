import { UserEntity } from 'src/modules/user/entities/user.entity';
import { MenuEntity } from './menu.entity';
export declare class FeedbackEntity {
    id: number;
    userId: number;
    foodId: number;
    comment: string;
    score: number;
    user: UserEntity;
    food: MenuEntity;
    created_at: Date;
}
