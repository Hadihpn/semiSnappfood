import { BaseEntity } from 'typeorm';
export declare class CategoryEntity extends BaseEntity {
    title: string;
    slug: string;
    image: string;
    show: boolean;
    parentId: true;
    parent: CategoryEntity;
    children: CategoryEntity[];
}
