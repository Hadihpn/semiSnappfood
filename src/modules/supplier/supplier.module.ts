import { Module } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { SupplierController } from './supplier.controller';
import { SupplierEntity } from './entities/supplier.entity';
import { SupplierOTPEntity } from './entities/supplier_otp.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierOtpService } from './supplier_otp.service';

@Module({
  imports: [TypeOrmModule.forFeature([SupplierEntity, SupplierOTPEntity])],
  controllers: [SupplierController],
  providers: [SupplierService, SupplierOtpService],
})
export class SupplierModule {}
