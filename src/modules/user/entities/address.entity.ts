import { EntityEnums } from 'src/common/enums/entity-name.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { BaseEntity } from 'src/common/abstracts/base.entity';
@Entity(EntityEnums.USERAddress)
export class UserAddress extends BaseEntity {
  @Column()
  title: string;
  @Column()
  province: string;
  @Column()
  city: string;
  @Column()
  address: string;
  @Column({ nullable: true })
  postal_code: string;
  @CreateDateColumn()
  created_at: Date;
  @Column()
  userId: number;
  @ManyToOne(() => UserEntity, (user) => user.addressList, {
    onDelete: 'CASCADE',
  })
  user: UserEntity;
}
