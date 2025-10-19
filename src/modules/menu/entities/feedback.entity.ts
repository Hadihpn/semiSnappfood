import { EntityEnums } from 'src/common/enums/entity-name.enum';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MenuEntity } from './menu.entity';

@Entity(EntityEnums.Feedbacks)
export class FeedbackEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  userId: number;
  @Column()
  foodId: number;
  @Column()
  comment: string;
  @ManyToOne(() => UserEntity, (user) => user.feedbacks, {
    onDelete: 'CASCADE',
  })
  user: UserEntity;
  @ManyToOne(() => MenuEntity, (food) => food.feedbacks, {
    onDelete: 'CASCADE',
  })
  food: MenuEntity;
  @CreateDateColumn()
  created_at: Date;
}
