import { Repository } from 'typeorm';
import { CheckOtpDto, SendOtpDto, SendSupplierOtpDto } from './dto/otp.dto';
import { JwtService } from '@nestjs/jwt';
import { PayloadType } from './types/payload';
import { UserEntity } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { OtpService } from '../user/otp.service';
import { SupplierService } from '../supplier/supplier.service';
import { SupplierEntity } from '../supplier/entities/supplier.entity';
import { SupplierOtpService } from '../supplier/supplier_otp.service';
export declare class AuthService {
    private userRepository;
    private jwtService;
    private userService;
    private otpService;
    private supplierService;
    private supplierOtpService;
    constructor(userRepository: Repository<UserEntity>, jwtService: JwtService, userService: UserService, otpService: OtpService, supplierService: SupplierService, supplierOtpService: SupplierOtpService);
    sendOtp(otpDto: SendOtpDto): Promise<{
        otp: any;
        message: string;
    }>;
    checkOtp(otpDto: CheckOtpDto): Promise<{
        accessToken: string;
        refreshToken: string;
        message: string;
    }>;
    sendSupplierOtp(sendSupplierOtp: SendSupplierOtpDto): Promise<{
        otp: any;
        message: string;
    }>;
    updateOtpForSupplier(supplier: SupplierEntity): Promise<string | undefined>;
    checkSupplierOtp(otpDto: CheckOtpDto): Promise<{
        accessToken: string;
        refreshToken: string;
        message: string;
    }>;
    checkEmail(email: string): Promise<void>;
    checkMobile(mobile: string): Promise<void>;
    updateOtpForUser(user: UserEntity): Promise<string | undefined>;
    makeTokensForLogin(payload: PayloadType): {
        accessToken: string;
        refreshToken: string;
    };
    validateAccessToken(token: string): Promise<UserEntity>;
}
