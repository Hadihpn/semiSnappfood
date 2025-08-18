import { EntityEnums } from 'src/common/enums/entity-name.enum';
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToOne } from 'typeorm';

@Entity(EntityEnums.USER)
export class User extends BaseEntity {
  @Column({ nullable: true })
  full_name: string;
  @Column({ nullable: true })
  last_name: string;
  @Column({ unique: true })
  email: string;
  @Column({ nullable: true, unique: true })
  mobile: string;
  @Column({ unique: true })
  invite_code: string;
  @Column({ default: 0 })
  score: number;
  @Column({ nullable: true })
  agentId: string;
  @CreateDateColumn({ type: 'time with time zone' })
  created_at: Date;
  @CreateDateColumn({ type: 'time with time zone' })
  updated_at: Date;
//   @OneToOne(()=>User,user=>user.agentId)
//   subset:number
}
