import { SupplierEntity } from 'src/modules/supplier/entities/supplier.entity';
import { MenuEntity } from './menu.entity';
export declare class TypeEntity {
    id: number;
    title: string;
    priority: number;
    supplierId: number;
    supplier: SupplierEntity;
    items: MenuEntity[];
}
