import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SendOtpDto } from '../auth/dto/otp.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { OtpService } from './otp.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private otpService:OtpService
  ) {}
  //createUserDto is same as sendOtpDto . so use sameSendOtpDto
  async create(createUserDto: CreateUserDto) {
    const { mobile,otp_code,otp_expires_in } = createUserDto;
    const newUser = await this.userRepository.create({
      mobile,
    });
    const otp = await this.otpService.create({code:otp_code,expires_in:otp_expires_in,userId:newUser.id})
    newUser.otpId = otp.id;
    await this.userRepository.save(newUser);
    return newUser;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
  async findOneByMobile(dto: SendOtpDto) {
    const { mobile } = dto;
    return await this.userRepository.findOne({
      where: { mobile },
      relations: { otp: true },
    });
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
