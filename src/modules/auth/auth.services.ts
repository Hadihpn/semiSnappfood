import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CheckOtpDto, SendOtpDto } from './dto/otp.dto';
import { randomInt } from 'crypto';
import { JwtService } from '@nestjs/jwt';
import { PayloadType } from './types/payload';
import { UserEntity } from '../user/entities/user.entity';
import { OTPEntity } from '../user/entities/otp.entity';
import { UserService } from '../user/user.service';
import { OtpService } from '../user/otp.service';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,

    private jwtService: JwtService,
    private userService: UserService,
    private otpService: OtpService,
  ) {}

  async sendOtp(otpDto: SendOtpDto) {
    const { mobile } = otpDto;
    let otp;
    // let user = await this.userRepository.findOneBy({mobile});
    const expiresIn = new Date(new Date().getTime() + 1000 * 60 * 2);
    const code = randomInt(10000, 99999).toString();
    let user = await this.userService.findOneByMobile(otpDto);
    if (!user) {
      user = await this.userService.create({
        mobile,
        otp_code: code,
        otp_expires_in: expiresIn,
      });
      otp=code;
    } else {
      otp = await this.updateOtpForUser(user);
    }

    return {
      otp,
      message: 'sent code successfully',
    };
  }
  async checkOtp(otpDto: CheckOtpDto) {
    const { code, mobile } = otpDto;
    const now = new Date();
    const user = await this.userService.findOneByMobile({mobile})
    if (!user || !user?.otp)
      throw new UnauthorizedException('Not Found Account');
    const otp = user?.otp;
    if (otp?.code !== code)
      throw new UnauthorizedException('Otp code is incorrect');
    if (otp.expires_in < now)
      throw new UnauthorizedException('Otp Code is expired');
    if (!user.mobile_verify) {
      user.mobile_verify=true;
      await this.userService.update(user.id,user)
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
  async checkEmail(email: string) {
    const user = await this.userRepository.findOneBy({ email });
    if (user) throw new ConflictException('email is already exist');
  }
  async checkMobile(mobile: string) {
    const user = await this.userRepository.findOneBy({ mobile });
    if (user) throw new ConflictException('mobile number is already exist');
  }
  async updateOtpForUser(user: UserEntity) {
    try {
      const expiresIn = new Date(new Date().getTime() + 1000 * 60 * 2);
      const code = randomInt(10000, 99999).toString();
      let { otp } = user;
      if (otp.expires_in > new Date()) {
        throw new BadRequestException('otp code not expired');
      }
      otp.code = code;
      otp.expires_in = expiresIn;
      await this.otpService.update(otp.id, otp);
      return code;
    } catch (error) {
      console.log(error);
    }
  }
  makeTokensForUser(payload: PayloadType) {
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
  async validateAccessToken(token: string) {
    try {
      const payload = this.jwtService.verify<PayloadType>(token, {
        secret: process.env.ACCESS_TOKEN_SECRET,
      });
      if (typeof payload === 'object' && payload?.id) {
        const user = await this.userRepository.findOneBy({ id: payload.id });
        if (!user) {
          throw new UnauthorizedException('login on your account ');
        }
        return user;
      }
      throw new UnauthorizedException('login on your account ');
    } catch (error) {
      throw new UnauthorizedException('login on your account ');
    }
  }
}
