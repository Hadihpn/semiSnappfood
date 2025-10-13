import { UserAddress } from './address.entity';
import { BaseEntity } from 'src/common/abstracts/base.entity';
import { OTPEntity } from './otp.entity';
export declare class UserEntity extends BaseEntity {
    full_name: string;
    last_name: string;
    email: string;
    mobile: string;
    invite_code: string;
    score: number;
    agentId: string;
    mobile_verify: boolean;
    otpId: number;
    created_at: Date;
    updated_at: Date;
    addressList: UserAddress[];
    otp: OTPEntity;
}
