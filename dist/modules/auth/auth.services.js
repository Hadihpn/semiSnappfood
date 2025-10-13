"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const crypto_1 = require("crypto");
const jwt_1 = require("@nestjs/jwt");
const user_entity_1 = require("../user/entities/user.entity");
const otp_entity_1 = require("../user/entities/otp.entity");
const user_service_1 = require("../user/user.service");
const otp_service_1 = require("../user/otp.service");
let AuthService = class AuthService {
    userRepository;
    otpRepository;
    jwtService;
    userService;
    otpService;
    constructor(userRepository, otpRepository, jwtService, userService, otpService) {
        this.userRepository = userRepository;
        this.otpRepository = otpRepository;
        this.jwtService = jwtService;
        this.userService = userService;
        this.otpService = otpService;
    }
    async sendOtp(otpDto) {
        const { mobile } = otpDto;
        let otp;
        const expiresIn = new Date(new Date().getTime() + 1000 * 60 * 2);
        const code = (0, crypto_1.randomInt)(10000, 99999).toString();
        let user = await this.userService.findOneByMobile(otpDto);
        if (!user) {
            user = await this.userService.create({
                mobile,
                otp_code: code,
                otp_expires_in: expiresIn,
            });
            otp = code;
        }
        else {
            otp = await this.updateOtpForUser(user);
        }
        return {
            otp,
            message: 'sent code successfully',
        };
    }
    async checkOtp(otpDto) {
        const { code, mobile } = otpDto;
        const now = new Date();
        const user = await this.userRepository.findOne({
            where: { mobile },
            relations: {
                otp: true,
            },
        });
        if (!user || !user?.otp)
            throw new common_1.UnauthorizedException('Not Found Account');
        const otp = user?.otp;
        if (otp?.code !== code)
            throw new common_1.UnauthorizedException('Otp code is incorrect');
        if (otp.expires_in < now)
            throw new common_1.UnauthorizedException('Otp Code is expired');
        if (!user.mobile_verify) {
            await this.userRepository.update({ id: user.id }, {
                mobile_verify: true,
            });
        }
        const { accessToken, refreshToken } = this.makeTokensForUser({
            id: user.id,
        });
        return {
            accessToken,
            refreshToken,
            message: 'You logged-in successfully',
        };
    }
    async checkEmail(email) {
        const user = await this.userRepository.findOneBy({ email });
        if (user)
            throw new common_1.ConflictException('email is already exist');
    }
    async checkMobile(mobile) {
        const user = await this.userRepository.findOneBy({ mobile });
        if (user)
            throw new common_1.ConflictException('mobile number is already exist');
    }
    async updateOtpForUser(user) {
        try {
            const expiresIn = new Date(new Date().getTime() + 1000 * 60 * 2);
            const code = (0, crypto_1.randomInt)(10000, 99999).toString();
            let { otp } = user;
            if (otp.expires_in > new Date()) {
                throw new common_1.BadRequestException('otp code not expired');
            }
            otp.code = code;
            otp.expires_in = expiresIn;
            await this.otpService.update(otp.id, otp);
            return code;
        }
        catch (error) {
            console.log(error);
        }
    }
    makeTokensForUser(payload) {
        const accessToken = this.jwtService.sign(payload, {
            secret: process.env.ACCESS_TOKEN_SECRET,
            expiresIn: '30d',
        });
        const refreshToken = this.jwtService.sign(payload, {
            secret: process.env.REFRESH_TOKEN_SECRET,
            expiresIn: '1y',
        });
        return {
            accessToken,
            refreshToken,
        };
    }
    async validateAccessToken(token) {
        try {
            const payload = this.jwtService.verify(token, {
                secret: process.env.ACCESS_TOKEN_SECRET,
            });
            if (typeof payload === 'object' && payload?.id) {
                const user = await this.userRepository.findOneBy({ id: payload.id });
                if (!user) {
                    throw new common_1.UnauthorizedException('login on your account ');
                }
                return user;
            }
            throw new common_1.UnauthorizedException('login on your account ');
        }
        catch (error) {
            throw new common_1.UnauthorizedException('login on your account ');
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(otp_entity_1.OTPEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        jwt_1.JwtService,
        user_service_1.UserService,
        otp_service_1.OtpService])
], AuthService);
//# sourceMappingURL=auth.services.js.map