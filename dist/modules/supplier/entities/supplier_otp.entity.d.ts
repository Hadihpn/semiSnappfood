import { SupplierEntity } from "./supplier.entity";
export declare class SupplierOTPEntity {
    id: number;
    code: string;
    expires_in: Date;
    supplierId: number;
    supplier: SupplierEntity;
}
