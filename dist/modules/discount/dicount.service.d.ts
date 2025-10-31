import { DiscountDto } from './dto/dicount.dto';
import { Repository } from 'typeorm';
import { DiscountEntity } from './entities/dicount.entity';
export declare class DiscountService {
    private discountRepository;
    constructor(discountRepository: Repository<DiscountEntity>);
    create(discountDto: DiscountDto): Promise<{
        message: string;
    }>;
    checkExistCode(code: string): Promise<void>;
    findOneByCode(code: string): Promise<DiscountEntity>;
    findAll(): Promise<DiscountEntity[]>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
