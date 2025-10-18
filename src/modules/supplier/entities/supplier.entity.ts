import { EntityEnums } from 'src/common/enums/entity-name.enum';
import { CategoryEntity } from 'src/modules/category/entities/category.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SupplierOTPEntity } from './supplier_otp.entity';
import { SupplementaryStatus } from '../enum/status.enum';

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
  mobile: string;
  @Column()
  invite_code: string;
  @Column({ nullable: true, default: false })
  mobile_verify: boolean;
  @Column({ nullable: true })
  categoryId: number;
  @Column({ nullable: true })
  otpId: number;
  @ManyToOne(() => CategoryEntity, (category) => category.suppliers, {
    onDelete: 'SET NULL',
  })
  category: CategoryEntity;
  @Column({ nullable: true })
  email: string;
  @Column({ nullable: true })
  national_code: string;
  @Column({ nullable: true, default: SupplementaryStatus.SignUp })
  status: string;
  @Column({ nullable: true })
  agentId: number;
  @Column({ nullable: true })
  image: string;
  @Column({ nullable: true })
  document: string;
  @ManyToOne(() => SupplierEntity, (supplier) => supplier.subsets)
  agent: SupplierEntity;
  @OneToMany(() => SupplierEntity, (supplier) => supplier.agent)
  subsets: SupplierEntity[];
  @OneToOne(() => SupplierOTPEntity, (otp) => otp.supplier)
  @JoinColumn()
  otp: SupplierOTPEntity;
}
