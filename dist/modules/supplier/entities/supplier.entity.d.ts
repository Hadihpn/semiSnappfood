import { CategoryEntity } from 'src/modules/category/entities/category.entity';
import { SupplierOTPEntity } from './supplier_otp.entity';
export declare class SupplierEntity {
    id: number;
    manager_name: string;
    manager_family: string;
    store_name: string;
    city: string;
    mobile: string;
    invite_code: string;
    mobile_verify: boolean;
    categoryId: number;
    otpId: number;
    category: CategoryEntity;
    email: string;
    national_code: string;
    status: string;
    agentId: number;
    image: string;
    document: string;
    agent: SupplierEntity;
    subsets: SupplierEntity[];
    otp: SupplierOTPEntity;
}
