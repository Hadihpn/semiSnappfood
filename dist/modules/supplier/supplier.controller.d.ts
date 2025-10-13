import { SupplierService } from './supplier.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
export declare class SupplierController {
    private readonly supplierService;
    constructor(supplierService: SupplierService);
    create(createSupplierDto: CreateSupplierDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSupplierDto: UpdateSupplierDto): string;
    remove(id: string): string;
}
