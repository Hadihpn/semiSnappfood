import { EntityEnums } from 'src/common/enums/entity-name.enum';
import { SupplierEntity } from 'src/modules/supplier/entities/supplier.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TypeEntity } from './type.entity';
import { FeedbackEntity } from './feedback.entity';

@Entity(EntityEnums.Menu)
export class MenuEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  name: string;
  @Column()
  image: string;
  @Column({ type: 'double' })
  price: number;
  @Column({ type: 'double', default: 0 })
  dicsount: number;
  @Column()
  description: string;
  @Column({ type: 'double' })
  score: number;
  @Column()
  typeId: number;
  @ManyToOne(() => SupplierEntity, (supplier) => supplier.menu, {
    onDelete: 'CASCADE',
  })
  supplier: SupplierEntity;
  @ManyToOne(() => TypeEntity, (type) => type.items)
  type: TypeEntity;
  @OneToMany(() => FeedbackEntity, (feedback) => feedback.food)
  feedbacks: FeedbackEntity[];
}
