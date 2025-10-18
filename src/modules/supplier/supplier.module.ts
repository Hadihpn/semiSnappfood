import { Module } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { SupplierController } from './supplier.controller';
import { SupplierEntity } from './entities/supplier.entity';
import { SupplierOTPEntity } from './entities/supplier_otp.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierOtpService } from './supplier_otp.service';
import { AuthModule } from '../auth/auth.module';
import { CategoryEntity } from '../category/entities/category.entity';
import { S3Module } from '../s3/s3.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([SupplierEntity, SupplierOTPEntity,CategoryEntity]),
    AuthModule,
    S3Module
  ],
  controllers: [SupplierController],
  providers: [SupplierService, SupplierOtpService],
})
export class SupplierModule {}
