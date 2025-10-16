import { CreateSupplierDto, SupplementaryInformationDto } from './dto/supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { SupplierEntity } from './entities/supplier.entity';
import { Repository } from 'typeorm';
import { SupplierOtpService } from './supplier_otp.service';
import { Request } from 'express';
export declare class SupplierService {
    private supplierRepository;
    private supplierOtpService;
    private req;
    constructor(supplierRepository: Repository<SupplierEntity>, supplierOtpService: SupplierOtpService, req: Request);
    create(createSupplierDto: CreateSupplierDto): Promise<SupplierEntity>;
    findAll(): string;
    findOne(id: number): string;
    findOneByMobile(mobile: string): Promise<SupplierEntity | null>;
    update(id: number, updateSupplierDto: UpdateSupplierDto): string;
    saveSapplementaryInformation(infoDto: SupplementaryInformationDto): Promise<{
        message: string;
    }>;
    remove(id: number): string;
}
