import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryEntity } from './entities/category.entity';
import { Repository } from 'typeorm';
import { S3Services } from '../s3/s3.services';
export declare class CategoryService {
    private categoryRepository;
    private s3;
    constructor(categoryRepository: Repository<CategoryEntity>, s3: S3Services);
    create(createCategoryDto: CreateCategoryDto, image: Express.Multer.File): Promise<{
        message: string;
        data: CategoryEntity;
    }>;
    findAll(): Promise<{
        categories: CategoryEntity[];
    }>;
    findOne(id: number): string;
    findOneBySlug(slug: string): Promise<CategoryEntity | null>;
    update(id: number, updateCategoryDto: UpdateCategoryDto): string;
    remove(id: number): string;
}
