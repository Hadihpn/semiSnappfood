import { MenuService } from '../service/menu.service';
import { FoodDto } from '../dto/food.dto';
export declare class FeedbackController {
    private readonly menuService;
    constructor(menuService: MenuService);
    create(foodDto: FoodDto): string;
    findOne(id: string): Promise<import("../entities/menu.entity").MenuEntity>;
    remove(id: string): Promise<string>;
}
