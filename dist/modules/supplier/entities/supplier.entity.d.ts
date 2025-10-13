import { CategoryEntity } from 'src/modules/category/entities/category.entity';
export declare class SupplierEntity {
    id: number;
    manager_name: string;
    manager_family: string;
    store_name: string;
    city: string;
    phone: string;
    invite_code: string;
    categoryId: number;
    category: CategoryEntity;
    agentId: number;
    agent: SupplierEntity;
    subsets: SupplierEntity[];
}
