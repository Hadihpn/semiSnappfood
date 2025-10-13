
import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {UserEntity} from "./user.entity";
import { EntityEnums } from "src/common/enums/entity-name.enum";

@Entity(EntityEnums.UserOtp)
export class OTPEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column()
  code: string;
  @Column()
  expires_in: Date;
  @Column()
  userId: number;
  @OneToOne(() => UserEntity, (user) => user.otp, {onDelete: "CASCADE"})
  user: UserEntity;
}
 
