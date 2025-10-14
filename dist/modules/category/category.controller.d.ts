import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: CreateCategoryDto, image: Express.Multer.File): any;
    findBySlug(slug: string): any;
    findAll(paginationDto: PaginationDto): Promise<{
        pagination: {
            totalCount: number;
            page: number;
            countPerPage: number;
            pageCount: number;
        };
        categories: import("./entities/category.entity").CategoryEntity[];
    }>;
    findOne(id: string): Promise<import("./entities/category.entity").CategoryEntity>;
    update(id: number, updateCategoryDto: UpdateCategoryDto, image: Express.Multer.File): any;
    remove(id: string): Promise<{
        message: string;
    }>;
}
