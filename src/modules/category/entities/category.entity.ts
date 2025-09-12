import { EntityEnums } from 'src/common/enums/entity-name.enum';
import { BaseEntity, Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity(EntityEnums.CATEGORY)
export class CategoryEntity extends BaseEntity {
  @Column()
  title: string;
  @Column({ unique: true })
  slug: string;
  @Column()
  image: string;
  @Column({ default: true })
  show: boolean;
  // @Column()
  // type:
  @Column({ nullable: true })
  parentId: true;
  @ManyToOne(() => CategoryEntity, (category) => category.children, {
    onDelete: 'CASCADE',
  })
  parent: CategoryEntity;
  @OneToMany(() => CategoryEntity, (category) => category.parent)
  children: CategoryEntity[];
}
