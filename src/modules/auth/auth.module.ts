
import {Module} from "@nestjs/common";
import {AuthController} from "./auth.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {JwtService} from "@nestjs/jwt";
import { UserEntity } from "../user/entities/user.entity";
import { OTPEntity } from "../user/entities/otp.entity";
import { AuthService } from "./auth.services";
import { UserService } from "../user/user.service";
import { OtpService } from "../user/otp.service";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, OTPEntity])],
  controllers: [AuthController],
  providers: [AuthService, JwtService,UserService,OtpService],
  exports: [AuthService, JwtService, TypeOrmModule],
})
export class AuthModule {}
