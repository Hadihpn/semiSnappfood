import { BaseEntity } from 'typeorm';
import { UserEntity } from './user.entity';
export declare class UserAddress extends BaseEntity {
    title: string;
    province: string;
    city: string;
    address: string;
    postal_code: string;
    created_at: Date;
    userId: number;
    user: UserEntity;
}
