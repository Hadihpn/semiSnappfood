import { ConflictException, Injectable } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { SupplierEntity } from './entities/supplier.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryService } from '../category/category.service';
import { SupplierOtpService } from './supplier_otp.service';

@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(SupplierEntity)
    private supplierRepository: Repository<SupplierEntity>,
    private supplierOtpService: SupplierOtpService,
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

  remove(id: number) {
    return `This action removes a #${id} supplier`;
  }
}
