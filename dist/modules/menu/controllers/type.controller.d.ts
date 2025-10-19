import { MenuTypeService } from '../service/type.service';
import { MenuTypeDto } from '../dto/menu-type.dto';
export declare class MenuTypeController {
    private readonly menuTypeService;
    constructor(menuTypeService: MenuTypeService);
    create(menuTypeDto: MenuTypeDto): Promise<{
        message: string;
    }>;
    findAll(): Promise<[import("../entities/type.entity").TypeEntity[], number]>;
    findOne(id: string): Promise<import("../entities/type.entity").TypeEntity>;
    update(id: string, menuTypeDto: MenuTypeDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
