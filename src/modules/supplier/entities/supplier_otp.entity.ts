
import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { EntityEnums } from "src/common/enums/entity-name.enum";
import { SupplierEntity } from "./supplier.entity";

@Entity(EntityEnums.SupplierOtp)
export class SupplierOTPEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column()
  code: string;
  @Column()
  expires_in: Date;
  @Column()
  supplierId: number;
  @OneToOne(() => SupplierEntity, (supplier) => supplier.otp, {onDelete: "CASCADE"})
  supplier: SupplierEntity;
}
 
