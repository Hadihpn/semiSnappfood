import { CreateMenuDto } from '../dto/food.dto';
export declare class MenuService {
    create(createMenuDto: CreateMenuDto): string;
    findAll(): string;
    findOne(id: number): string;
    remove(id: number): string;
}
