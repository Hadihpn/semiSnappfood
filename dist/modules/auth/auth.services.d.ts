import { Repository } from 'typeorm';
import { CheckOtpDto, SendOtpDto } from './dto/otp.dto';
import { JwtService } from '@nestjs/jwt';
import { PayloadType } from './types/payload';
import { UserEntity } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { OtpService } from '../user/otp.service';
export declare class AuthService {
    private userRepository;
    private jwtService;
    private userService;
    private otpService;
    constructor(userRepository: Repository<UserEntity>, jwtService: JwtService, userService: UserService, otpService: OtpService);
    sendOtp(otpDto: SendOtpDto): Promise<{
        otp: any;
        message: string;
    }>;
    checkOtp(otpDto: CheckOtpDto): Promise<{
        accessToken: string;
        refreshToken: string;
        message: string;
    }>;
    checkEmail(email: string): Promise<void>;
    checkMobile(mobile: string): Promise<void>;
    updateOtpForUser(user: UserEntity): Promise<string | undefined>;
    makeTokensForUser(payload: PayloadType): {
        accessToken: string;
        refreshToken: string;
    };
    validateAccessToken(token: string): Promise<UserEntity>;
}
