import { SupplierService } from './supplier.service';
import { CreateSupplierDto } from './dto/supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
export declare class SupplierController {
    private readonly supplierService;
    constructor(supplierService: SupplierService);
    create(createSupplierDto: CreateSupplierDto): Promise<import("./entities/supplier.entity").SupplierEntity>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSupplierSignupDto: UpdateSupplierDto): string;
    remove(id: string): string;
}
