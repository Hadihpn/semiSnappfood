"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_entity_1 = require("./entities/category.entity");
const typeorm_2 = require("typeorm");
const s3_services_1 = require("../s3/s3.services");
const function_utils_1 = require("../../utility/function.utils");
const pagination_util_1 = require("../../common/utility/pagination.util");
let CategoryService = class CategoryService {
    categoryRepository;
    s3;
    constructor(categoryRepository, s3) {
        this.categoryRepository = categoryRepository;
        this.s3 = s3;
    }
    async create(createCategoryDto, image) {
        let { title, slug, show, parentId } = createCategoryDto;
        if (slug) {
            const category = await this.findOneBySlug(slug);
            if (category) {
                throw new common_1.ConflictException('category already existed');
            }
        }
        const { Location, Key } = await this.s3.uploadFile(image, 'snappfood-category-image');
        console.log(Location, Key);
        console.log('parentId : ', parentId);
        console.log('parentId : ', +parentId);
        if ((0, function_utils_1.isBoolean)(show)) {
            show = (0, function_utils_1.toBoolean)(show);
        }
        let parent;
        if (parentId && !isNaN(+parentId)) {
            parent = await this.categoryRepository.findOneBy({ id: parentId });
            console.log('parent : ', parent);
        }
        console.log({
            title,
            slug,
            show,
            parentId: parent?.id ? parent.id : 0,
            image: Location,
            imageKey: Key,
        });
        const result = await this.categoryRepository.create({
            title,
            slug,
            show,
            parentId: parent?.id ? parent.id : null,
            image: Location,
            imageKey: Key,
        });
        await this.categoryRepository.save(result);
        return {
            message: 'category created successfully',
            data: result,
        };
    }
    async findAll(paginationDto) {
        const { limit, page, skip } = (0, pagination_util_1.paginationSolver)(paginationDto.page, paginationDto.limit);
        const [categories, count] = await this.categoryRepository.findAndCount({
            where: {},
            relations: {
                parent: true,
            },
            select: {
                parent: {
                    title: true,
                },
            },
            skip,
            take: limit,
            order: { id: 'DESC' },
        });
        return {
            pagination: (0, pagination_util_1.paginationGenerator)(count, page, limit),
            categories,
        };
    }
    findOne(id) {
        return `This action returns a #${id} category`;
    }
    async findOneBySlug(slug) {
        const category = await this.categoryRepository.findOne({
            where: { slug },
            relations: {
                children: true,
                parent: true,
            },
        });
        return category;
    }
    async update(id, updateCategoryDto, image) {
        const { title, slug, show, parentId } = updateCategoryDto;
        const category = await this.categoryRepository.findOneBy({ id });
        if (!category) {
            throw new common_1.ConflictException('category not found');
        }
        const UpdateObject = {};
        const { Location, Key } = await this.s3.uploadFile(image, 'snappfood-category-image');
        if (location) {
            UpdateObject['image'] = Location;
            UpdateObject['imageKey'] = Key;
            if (category.imageKey)
                await this.s3.deleteFile(category.imageKey);
        }
        if (title)
            UpdateObject['title'] = title;
        if (show && (0, function_utils_1.isBoolean)(show))
            UpdateObject['show'] = (0, function_utils_1.toBoolean)(show);
        if (parentId && !isNaN(parseInt(parentId.toString()))) {
            const category = await this.categoryRepository.findOneBy({
                id: parentId,
            });
            if (!category)
                throw new common_1.NotFoundException('parent category not found');
            UpdateObject['parentId'] = category.id;
        }
        if (slug?.trim() != '') {
            const category = await this.categoryRepository.findOneBy({ slug });
            if (category && category.id !== id)
                throw new common_1.NotFoundException('already category exist with this slug');
            UpdateObject['slug'] = slug;
        }
        await this.categoryRepository.update(id, UpdateObject);
        return { message: 'category updated successfully' };
    }
    async remove(id) {
        const category = await this.findOne(id);
        await this.categoryRepository.delete(category);
        return {
            message: 'category deleted successfully',
        };
    }
    async findBySlug(slug) {
        const category = await this.categoryRepository.findOne({
            where: { slug },
            relations: {
                children: true,
                parent: true
            },
        });
        if (!category)
            throw new common_1.NotFoundException('not found this category slug ');
        return {
            category,
        };
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.CategoryEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        s3_services_1.S3Services])
], CategoryService);
//# sourceMappingURL=category.service.js.map