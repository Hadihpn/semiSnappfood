import { CheckOtpDto, SendOtpDto } from "./dto/otp.dto";
import { AuthService } from "./auth.services";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    sendOtp(otpDto: SendOtpDto): Promise<{
        otp: any;
        message: string;
    }>;
    checkOtp(otpDto: CheckOtpDto): Promise<{
        accessToken: string;
        refreshToken: string;
        message: string;
    }>;
}
