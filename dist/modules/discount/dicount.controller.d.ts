import { DiscountService } from './dicount.service';
import { DiscountDto } from './dto/dicount.dto';
export declare class DiscountController {
    private discountService;
    constructor(discountService: DiscountService);
    create(discountDto: DiscountDto): Promise<{
        message: string;
    }>;
    findAll(): Promise<import("./entities/dicount.entity").DiscountEntity[]>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
