import { EntityEnums } from 'src/common/enums/entity-name.enum';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { UserAddress } from './address.entity';

@Entity(EntityEnums.USER)
export class UserEntity extends BaseEntity {
  @Column({ nullable: true })
  full_name: string;
  @Column({ nullable: true })
  last_name: string;
  @Column({ unique: true })
  email: string;
  @Column({ nullable: true, unique: true })
  mobile: string;
  @Column({ unique: true })
  invite_code: string;
  @Column({ default: 0 })
  score: number;
  @Column({ nullable: true })
  agentId: string;
  @CreateDateColumn({ type: 'time with time zone' })
  created_at: Date;
  @CreateDateColumn({ type: 'time with time zone' })
  updated_at: Date;
  @OneToMany(() => UserAddress, (address) => address.user)
  addressList: UserAddress[];
  //   @OneToOne(()=>User,user=>user.agentId)
  //   subset:number
}
