import { CreateSupplierDto, SupplementaryInformationDto } from './dto/supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { SupplierEntity } from './entities/supplier.entity';
import { Repository } from 'typeorm';
import { SupplierOtpService } from './supplier_otp.service';
import { Request } from 'express';
import { DocumentType } from './types';
import { S3Services } from '../s3/s3.services';
export declare class SupplierService {
    private supplierRepository;
    private supplierOtpService;
    private req;
    private s3Service;
    constructor(supplierRepository: Repository<SupplierEntity>, supplierOtpService: SupplierOtpService, req: Request, s3Service: S3Services);
    create(createSupplierDto: CreateSupplierDto): Promise<SupplierEntity>;
    findAll(): string;
    findOne(id: number): Promise<SupplierEntity>;
    findOneByMobile(mobile: string): Promise<SupplierEntity | null>;
    update(id: number, updateSupplierDto: UpdateSupplierDto): string;
    saveSapplementaryInformation(infoDto: SupplementaryInformationDto): Promise<{
        message: string;
    }>;
    remove(id: number): string;
    uploadDocuments(files: DocumentType): Promise<void>;
}
