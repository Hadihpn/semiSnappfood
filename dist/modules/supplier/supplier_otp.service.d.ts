import { Repository } from 'typeorm';
import { SupplierOTPEntity } from './entities/supplier_otp.entity';
import { CreateSupllierOtpDto } from './dto/create_otp_supplier.dto';
import { UpdateSupplierOtpDto } from './dto/update_otp_supplier.dto';
export declare class SupplierOtpService {
    private supplierOtpRepository;
    constructor(supplierOtpRepository: Repository<SupplierOTPEntity>);
    create(createSupllierOtpDto: CreateSupllierOtpDto): Promise<SupplierOTPEntity>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSupplierOtpDto: UpdateSupplierOtpDto): Promise<void>;
    remove(id: number): string;
}
