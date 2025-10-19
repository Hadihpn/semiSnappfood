import { MenuService } from './service/menu.service';
import { CreateMenuDto } from './dto/food.dto';
export declare class MenuController {
    private readonly menuService;
    constructor(menuService: MenuService);
    create(createMenuDto: CreateMenuDto): string;
    findAll(): string;
    findOne(id: string): string;
    remove(id: string): string;
}
