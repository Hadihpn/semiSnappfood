import { bool } from 'aws-sdk/clients/signer';
import { EntityEnums } from 'src/common/enums/entity-name.enum';
import { UserBasketEntity } from 'src/modules/basket/entities/basket.entity';
import { MenuEntity } from 'src/modules/menu/entities/menu.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity(EntityEnums.Discount)
export class DiscountEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  code: string;
  @Column({ type: 'double', nullable: true })
  percent: number;
  @Column({ type: 'double', nullable: true })
  amount: number;
  @Column({ nullable: true })
  start_in: Date;
  @Column({ nullable: true })
  expires_in: Date;
  @Column({ nullable: true })
  limit: number;
  @Column({ nullable: true, default: 0 })
  usage: number;
  @Column({ nullable: true })
  supplierId: number;
  @Column({ default: true })
  active: boolean;
  @ManyToOne(() => MenuEntity, (food) => food.baskets, { onDelete: 'CASCADE' })
  food: MenuEntity;
  @OneToMany(()=>UserBasketEntity,basket=>basket.discount)
  baskets:UserBasketEntity[]
}
