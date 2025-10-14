
import {Module} from "@nestjs/common";
import {AuthController} from "./auth.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {JwtService} from "@nestjs/jwt";
import { UserEntity } from "../user/entities/user.entity";
import { OTPEntity } from "../user/entities/otp.entity";
import { AuthService } from "./auth.services";
import { UserService } from "../user/user.service";
import { OtpService } from "../user/otp.service";
import { SupplierService } from "../supplier/supplier.service";
import { SupplierOtpService } from "../supplier/supplier_otp.service";
import { SupplierEntity } from "../supplier/entities/supplier.entity";
import { SupplierOTPEntity } from "../supplier/entities/supplier_otp.entity";
import { CategoryEntity } from "../category/entities/category.entity";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, OTPEntity,SupplierEntity,SupplierOTPEntity,CategoryEntity])],
  controllers: [AuthController],
  providers: [AuthService, JwtService,UserService,OtpService,SupplierService,SupplierOtpService],
  exports: [AuthService, JwtService, TypeOrmModule],
})
export class AuthModule {}
