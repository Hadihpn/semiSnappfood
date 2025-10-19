import { SupplierEntity } from 'src/modules/supplier/entities/supplier.entity';
import { TypeEntity } from './type.entity';
import { FeedbackEntity } from './feedback.entity';
export declare class MenuEntity {
    id: number;
    name: string;
    image: string;
    price: number;
    dicsount: number;
    description: string;
    score: number;
    typeId: number;
    supplier: SupplierEntity;
    type: TypeEntity;
    feedbacks: FeedbackEntity[];
}
