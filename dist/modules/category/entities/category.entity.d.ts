import { BaseEntity } from 'src/common/abstracts/base.entity';
export declare class CategoryEntity extends BaseEntity {
    title: string;
    slug: string;
    image: string;
    show: boolean;
    parentId: number;
    parent: CategoryEntity;
    children: CategoryEntity[];
}
