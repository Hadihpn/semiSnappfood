import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { SupplierEntity } from './entities/supplier.entity';
import { Repository } from 'typeorm';
import { SupplierOtpService } from './supplier_otp.service';
export declare class SupplierService {
    private supplierRepository;
    private supplierOtpService;
    constructor(supplierRepository: Repository<SupplierEntity>, supplierOtpService: SupplierOtpService);
    create(createSupplierDto: CreateSupplierDto): Promise<SupplierEntity>;
    findAll(): string;
    findOne(id: number): string;
    findOneByMobile(mobile: string): Promise<SupplierEntity | null>;
    update(id: number, updateSupplierDto: UpdateSupplierDto): string;
    remove(id: number): string;
}
