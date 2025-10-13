import { BaseEntity } from 'src/common/abstracts/base.entity';
import { EntityEnums } from 'src/common/enums/entity-name.enum';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity(EntityEnums.Category)
export class CategoryEntity extends BaseEntity {
  @Column()
  title: string;
  @Column({ unique: true })
  slug: string;
  @Column()
  image: string;
  @Column()
  imageKey: string;
  @Column({ default: true })
  show: boolean;
  // @Column()
  // type:
  @Column({ nullable: true })
  parentId: number;
  @ManyToOne(() => CategoryEntity, (category) => category.children, {
    onDelete: 'CASCADE',
  })
  parent: CategoryEntity;
  @OneToMany(() => CategoryEntity, (category) => category.parent)
  children: CategoryEntity[];
}
