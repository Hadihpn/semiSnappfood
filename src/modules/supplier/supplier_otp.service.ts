import { Injectable } from '@nestjs/common';
import { SendOtpDto } from '../auth/dto/otp.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SupplierOTPEntity } from './entities/supplier_otp.entity';
import { CreateSupllierOtpDto } from './dto/create_otp_supplier.dto';
import { UpdateSupplierOtpDto } from './dto/update_otp_supplier.dto';

@Injectable()
export class SupplierOtpService {
  constructor(
    @InjectRepository(SupplierOTPEntity)
    private supplierOtpRepository: Repository<SupplierOTPEntity>,
  ) {}
  //createUserDto is same as sendOtpDto . so use sameSendOtpDto
  async create(createSupllierOtpDto: CreateSupllierOtpDto) {
    const { supplierId, code, expires_in } = createSupllierOtpDto;
    const newOtp = await this.supplierOtpRepository.create({
      code,
      supplierId,
      expires_in: expires_in,
    });
    await this.supplierOtpRepository.save(newOtp);
    return newOtp;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
  async update(id: number, updateSupplierOtpDto: UpdateSupplierOtpDto) {
    await this.supplierOtpRepository.update({ id }, updateSupplierOtpDto);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
