import { TypeEntity } from '../entities/type.entity';
import { Repository } from 'typeorm';
import { Request } from 'express';
import { MenuTypeDto } from '../dto/menu-type.dto';
export declare class MenuTypeService {
    private typeRepository;
    private req;
    constructor(typeRepository: Repository<TypeEntity>, req: Request);
    create(createDto: MenuTypeDto): Promise<{
        message: string;
    }>;
    findAll(): Promise<[TypeEntity[], number]>;
    findOneById(id: number): Promise<TypeEntity>;
    delete(id: number): Promise<{
        message: string;
    }>;
    update(id: number, menuTypeDto: MenuTypeDto): Promise<{
        message: string;
    }>;
}
