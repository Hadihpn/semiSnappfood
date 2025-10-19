import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
  Scope,
  UnauthorizedException,
} from '@nestjs/common';
import {
  CreateSupplierDto,
  SupplementaryInformationDto,
} from './dto/supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { SupplierEntity } from './entities/supplier.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SupplierOtpService } from './supplier_otp.service';
import { Request } from 'express';
import { REQUEST } from '@nestjs/core';
import { SupplementaryStatus } from './enum/status.enum';
import { DocumentType } from './types';
import { S3Services } from '../s3/s3.services';
import { JwtService } from '@nestjs/jwt';
import { PayloadType } from '../auth/types/payload';

@Injectable({ scope: Scope.REQUEST })
export class SupplierService {
  constructor(
    @InjectRepository(SupplierEntity)
    private supplierRepository: Repository<SupplierEntity>,
    private supplierOtpService: SupplierOtpService,
    @Inject(REQUEST) private req: Request,
     private jwtService: JwtService,
    private s3Service: S3Services,
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

  async findOne(id: number) {
    const supplier = await this.supplierRepository.findOneBy({ id });
    if (!supplier) throw new NotFoundException('supplier not found');
    return supplier;
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
  async uploadDocuments(files: DocumentType) {
    const id = this.req?.user?.id;
    if(!id) throw new NotFoundException('supplier not found');
    const supplier = await this.findOne(id);
    const { image, acceptedDoc } = files;
    const imageResult = await this.s3Service.uploadFile(
      image[0],
      'supplier/images',
    );
    const acceptedDocResult = await this.s3Service.uploadFile(
      acceptedDoc[0],
      'supplier/acceptedDocs',
    );
  if(imageResult) supplier.image = imageResult.Location;
  if(acceptedDocResult) supplier.document = acceptedDocResult.Location;
  supplier.status = SupplementaryStatus.UploadedDocument;
  await this.supplierRepository.save(supplier);
    console.log(files);
  }
  async validateAccessToken(token: string) {
    try {
      const payload = this.jwtService.verify<PayloadType>(token, {
        secret: process.env.ACCESS_TOKEN_SECRET,
      });
      if (typeof payload === "object" && payload?.id) {
        const supplier = await this.supplierRepository.findOneBy({
          id: payload.id,
        });
        if (!supplier) {
          throw new UnauthorizedException("login on your account ");
        }
        return {
          id: supplier.id,
          first_name: supplier.manager_name,
          last_name: supplier.manager_family,
          mobile: supplier.mobile,
        };
      }
      throw new UnauthorizedException("login on your account ");
    } catch (error) {
      throw new UnauthorizedException("login on your account ");
    }
  }
}
