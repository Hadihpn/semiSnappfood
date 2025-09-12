import { BaseEntity } from 'typeorm';
import { UserAddress } from './address.entity';
export declare class UserEntity extends BaseEntity {
    full_name: string;
    last_name: string;
    email: string;
    mobile: string;
    invite_code: string;
    score: number;
    agentId: string;
    created_at: Date;
    updated_at: Date;
    addressList: UserAddress[];
}
