import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryEntity } from './entities/category.entity';
import { Repository } from 'typeorm';
import { S3Services } from '../s3/s3.services';
import { PaginationDto } from 'src/common/dto/pagination.dto';
export declare class CategoryService {
    private categoryRepository;
    private s3;
    constructor(categoryRepository: Repository<CategoryEntity>, s3: S3Services);
    create(createCategoryDto: CreateCategoryDto, image: Express.Multer.File): Promise<{
        message: string;
        data: CategoryEntity;
    }>;
    findAll(paginationDto: PaginationDto): Promise<{
        pagination: {
            totalCount: number;
            page: number;
            countPerPage: number;
            pageCount: number;
        };
        categories: CategoryEntity[];
    }>;
    findOne(id: number): Promise<CategoryEntity>;
    findOneBySlug(slug: string): Promise<CategoryEntity | null>;
    update(id: number, updateCategoryDto: UpdateCategoryDto, image: Express.Multer.File): Promise<{
        message: string;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
    findBySlug(slug: string): Promise<{
        category: CategoryEntity;
    }>;
}
