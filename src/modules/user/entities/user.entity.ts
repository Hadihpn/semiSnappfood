import { EntityEnums } from 'src/common/enums/entity-name.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { UserAddress } from './address.entity';
import { BaseEntity } from 'src/common/abstracts/base.entity';
import { OTPEntity } from './otp.entity';
import { FeedbackEntity } from 'src/modules/menu/entities/feedback.entity';
import { UserBasketEntity } from 'src/modules/basket/entities/basket.entity';

@Entity(EntityEnums.User)
export class UserEntity extends BaseEntity {
  @Column({ nullable: true })
  full_name: string;
  @Column({ nullable: true })
  last_name: string;
  @Column({ unique: true ,nullable:true})
  email: string;
  @Column({ nullable: false, unique: true })
  mobile: string;
  @Column({ unique: true,nullable:true })
  invite_code: string;
  @Column({ default: 0 })
  score: number;
  @Column({ nullable: true })
  agentId: string;
  @Column({ nullable: true, default: false })
  mobile_verify: boolean;
  @Column({nullable:true})
  otpId: number;
  @CreateDateColumn()
  created_at: Date;
  @CreateDateColumn()
  updated_at: Date;
  @OneToMany(() => UserAddress, (address) => address.user)
  addressList: UserAddress[];
  @OneToMany(() => FeedbackEntity, (feedbak) => feedbak.user)
  feedbacks: FeedbackEntity[];
  //   @OneToOne(()=>User,user=>user.agentId)
  //   subset:number
  @OneToOne(() => OTPEntity, (otp) => otp.user)
  @JoinColumn()
  otp: OTPEntity;
  @OneToMany(() => UserBasketEntity, (basket) => basket.user)
  basket: UserBasketEntity[];
}
