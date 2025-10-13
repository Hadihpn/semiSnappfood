import { BaseEntity } from 'src/common/abstracts/base.entity';
import { SupplierEntity } from 'src/modules/supplier/entities/supplier.entity';
export declare class CategoryEntity extends BaseEntity {
    title: string;
    slug: string;
    image: string;
    imageKey: string;
    show: boolean;
    parentId: number;
    parent: CategoryEntity;
    children: CategoryEntity[];
    suppliers: SupplierEntity[];
}
