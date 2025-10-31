import { EntityEnums } from 'src/common/enums/entity-name.enum';
import { DicountEntity } from 'src/modules/dicount/entities/dicount.entity';
import { MenuEntity } from 'src/modules/menu/entities/menu.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BasketDiscountType } from '../enum/discount-type';

@Entity(EntityEnums.UserBasket)
export class UserBasketEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  foodId: number;
  @Column()
  userId: number;
  @Column({ default: 1 })
  count: number;
  @Column({ type: 'enum', enum: BasketDiscountType, nullable: true })
  type: string;
  @Column()
  discountId: number;
  @CreateDateColumn()
  created_at: Date;
  @ManyToOne(() => MenuEntity, (food) => food.baskets, { onDelete: 'CASCADE' })
  food: MenuEntity;
  @ManyToOne(() => UserEntity, (user) => user.basket, { onDelete: 'CASCADE' })
  user: UserEntity;
  @ManyToOne(() => DicountEntity, (discount) => discount.baskets, {
    onDelete: 'CASCADE',
  })
  discount: DicountEntity;
}
