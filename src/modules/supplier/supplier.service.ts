import { ConflictException, Inject, Injectable, Scope } from '@nestjs/common';
import {
  CreateSupplierDto,
  SupplementaryInformationDto,
} from './dto/supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { SupplierEntity } from './entities/supplier.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryService } from '../category/category.service';
import { SupplierOtpService } from './supplier_otp.service';
import { Request } from 'express';
import { REQUEST } from '@nestjs/core';
import { SupplementaryStatus } from './enum/status.enum';

@Injectable({ scope: Scope.REQUEST })
export class SupplierService {
  constructor(
    @InjectRepository(SupplierEntity)
    private supplierRepository: Repository<SupplierEntity>,
    private supplierOtpService: SupplierOtpService,
    @Inject(REQUEST) private req: Request,
  ) {}
  async create(createSupplierDto: CreateSupplierDto) {
    const {
      categoryId,
      city,
      invite_code,
      manager_family,
      manager_name,
      mobile,
      store_name,
      otp_code,
      otp_expires_in,
    } = createSupplierDto;
    // const supplier = await this.supplierRepository.findOneBy({ mobile });
    // if (supplier) throw new ConflictException('supplier account already exist');
    // const category = await this.categoryService.findOne(categoryId);
    let agent: SupplierEntity | null = null;
    if (invite_code) {
      agent = await this.supplierRepository.findOneBy({ invite_code });
    }
    const mobileNumber = parseInt(mobile);
    const newSupplier = this.supplierRepository.create({
      manager_name,
      manager_family,
      mobile,
      categoryId,
      city,
      store_name,
      agentId: agent?.id,
      invite_code: mobileNumber.toString(32).toUpperCase(),
    });
    await this.supplierRepository.save(newSupplier);
    const otp = await this.supplierOtpService.create({
      code: otp_code,
      expires_in: otp_expires_in,
      supplierId: newSupplier.id,
    });
    newSupplier.otpId = otp.id;
    await this.supplierRepository.save(newSupplier);
    return newSupplier;
  }

  findAll() {
    return `This action returns all supplier`;
  }

  findOne(id: number) {
    return `This action returns a #${id} supplier`;
  }
  async findOneByMobile(mobile: string) {
    return await this.supplierRepository.findOneBy({ mobile });
  }

  update(id: number, updateSupplierDto: UpdateSupplierDto) {
    return `This action updates a #${id} supplier`;
  }
  async saveSapplementaryInformation(infoDto: SupplementaryInformationDto) {
    const id = this.req?.user?.id;
    const { email, national_code } = infoDto;
    let supplier = await this.supplierRepository.findOneBy({ email });
    if (supplier && supplier.id !== id) {
      throw new ConflictException(
        'this supplier with this email already exist',
      );
    }
    supplier = await this.supplierRepository.findOneBy({ national_code });

    if (supplier && supplier.id !== id) {
      throw new ConflictException(
        'this supplier with this national_code already exist',
      );
    }
    await this.supplierRepository.update(
      { id },
      {
        email,
        national_code,
        status: SupplementaryStatus.SupplemntaryInformation,
      },
    );
    return {
      message: 'supplementary information updated succesfully',
    };
  }
  remove(id: number) {
    return `This action removes a #${id} supplier`;
  }
}
