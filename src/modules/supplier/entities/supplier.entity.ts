import { EntityEnums } from 'src/common/enums/entity-name.enum';
import { CategoryEntity } from 'src/modules/category/entities/category.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity(EntityEnums.Supplier)
export class SupplierEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  manager_name: string;
  @Column()
  manager_family: string;
  @Column()
  store_name: string;
  @Column()
  city: string;
  @Column()
  phone: string;
  @Column()
  invite_code: string;
  @Column({ nullable: true })
  categoryId: number;
  @ManyToOne(() => CategoryEntity, (category) => category.suppliers, {
    onDelete: 'SET NULL',
  })
  category: CategoryEntity;
  @Column({ nullable: true })
  agentId: number;
  @ManyToOne(() => SupplierEntity, (supplier) => supplier.subsets)
  agent: SupplierEntity;
  @OneToMany(() => SupplierEntity, (supplier) => supplier.agent)
  subsets: SupplierEntity[];
}
