import { UserAddress } from './address.entity';
import { BaseEntity } from 'src/common/abstracts/base.entity';
import { OTPEntity } from './otp.entity';
import { FeedbackEntity } from 'src/modules/menu/entities/feedback.entity';
import { UserBasketEntity } from 'src/modules/basket/entities/basket.entity';
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
    feedbacks: FeedbackEntity[];
    otp: OTPEntity;
    basket: UserBasketEntity[];
}
