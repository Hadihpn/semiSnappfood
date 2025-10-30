import { MenuService } from '../service/menu.service';
import { FoodDto } from '../dto/food.dto';
export declare class MenuController {
    private readonly menuService;
    constructor(menuService: MenuService);
    create(foodDto: FoodDto, image: Express.Multer.File): Promise<{
        message: string;
    }>;
    findAll(id: number): Promise<import("../entities/type.entity").TypeEntity[]>;
    findOne(id: string): Promise<import("../entities/menu.entity").MenuEntity>;
    remove(id: string): Promise<string>;
}
