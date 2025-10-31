import { FoodDto, UpdateFoodDto } from '../dto/food.dto';
import { MenuEntity } from '../entities/menu.entity';
import { Repository } from 'typeorm';
import { TypeEntity } from '../entities/type.entity';
import { MenuTypeService } from './type.service';
import { S3Services } from 'src/modules/s3/s3.services';
import { Request } from 'express';
export declare class MenuService {
    private req;
    private menuRepository;
    private menuTypeRepository;
    private typeService;
    private s3Service;
    constructor(req: Request, menuRepository: Repository<MenuEntity>, menuTypeRepository: Repository<TypeEntity>, typeService: MenuTypeService, s3Service: S3Services);
    create(image: Express.Multer.File, foodDto: FoodDto): Promise<{
        message: string;
    }>;
    findAll(supplierId: number): Promise<TypeEntity[]>;
    findOne(id: number): Promise<MenuEntity>;
    checkExist(id: number): Promise<MenuEntity>;
    update(id: number, foodDto: UpdateFoodDto, image: Express.Multer.File): string;
    remove(id: number): Promise<string>;
    getOne(id: number): Promise<MenuEntity>;
}
