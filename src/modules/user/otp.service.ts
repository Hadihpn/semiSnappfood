import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SendOtpDto } from '../auth/dto/otp.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { OTPEntity } from './entities/otp.entity';
import { CreateOtpDto } from './dto/create-otp.dto';
import { UpdateOtpDto } from './dto/update-otp.dto';

@Injectable()
export class OtpService {
  constructor(
    @InjectRepository(OTPEntity)
    private otpRepository: Repository<OTPEntity>,
  ) {}
  //createUserDto is same as sendOtpDto . so use sameSendOtpDto
  async create(createOtpDto: CreateOtpDto) {
    const { userId, code, expires_in } = createOtpDto;
    const newOtp = await this.otpRepository.create({
      code,
      userId,
      expires_in: expires_in,
    });
    await this.otpRepository.save(newOtp);
    return newOtp;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
  async update(id: number, updateOtpDto: UpdateOtpDto) {
    await this.otpRepository.update({ id }, updateOtpDto);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
