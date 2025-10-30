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
exports.MenuService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const menu_entity_1 = require("../entities/menu.entity");
const typeorm_2 = require("typeorm");
const type_entity_1 = require("../entities/type.entity");
const type_service_1 = require("./type.service");
const s3_services_1 = require("../../s3/s3.services");
let MenuService = class MenuService {
    req;
    menuRepository;
    menuTypeRepository;
    typeService;
    s3Service;
    constructor(req, menuRepository, menuTypeRepository, typeService, s3Service) {
        this.req = req;
        this.menuRepository = menuRepository;
        this.menuTypeRepository = menuTypeRepository;
        this.typeService = typeService;
        this.s3Service = s3Service;
    }
    async create(image, foodDto) {
        const supplierId = this.req.user?.id;
        const { name, description, discount, price, typeId } = foodDto;
        const type = await this.typeService.findOneById(typeId);
        const { Location, Key } = await this.s3Service.uploadFile(image, "menu-item");
        const item = this.menuRepository.create({
            name,
            description,
            discount,
            price,
            typeId: type.id,
            supplierId,
            image: Location,
            key: Key,
        });
        await this.menuRepository.save(item);
        return {
            message: "create",
        };
    }
    async findAll(supplierId) {
        return await this.menuTypeRepository.find({
            where: { supplierId },
            relations: {
                items: true,
            },
        });
    }
    async findOne(id) {
        const supplierId = this.req.user?.id;
        const item = await this.menuRepository.findOne({
            where: { id, supplierId },
            relations: {
                type: true,
                feedbacks: {
                    user: true,
                },
            },
            select: {
                type: {
                    title: true,
                },
                feedbacks: {
                    comment: true,
                    created_at: true,
                    user: {
                        full_name: true,
                    },
                    score: true,
                },
            },
        });
        if (!item)
            throw new common_1.NotFoundException('menu not found');
        return item;
    }
    async checkExist(id) {
        const supplierId = this.req.user?.id;
        const item = await this.menuRepository.findOneBy({ id, supplierId });
        if (!item)
            throw new common_1.NotFoundException('menu not found');
        return item;
    }
    update(id, foodDto, image) {
        return `This action updates a #${id} menu`;
    }
    async remove(id) {
        const item = await this.findOne(id);
        if (!item)
            throw new common_1.NotFoundException('menu not found');
        await this.menuRepository.delete(item);
        return `This action removes a menu successfully`;
    }
};
exports.MenuService = MenuService;
exports.MenuService = MenuService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __param(1, (0, typeorm_1.InjectRepository)(menu_entity_1.MenuEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(type_entity_1.TypeEntity)),
    __metadata("design:paramtypes", [Object, typeorm_2.Repository,
        typeorm_2.Repository,
        type_service_1.MenuTypeService,
        s3_services_1.S3Services])
], MenuService);
//# sourceMappingURL=menu.service.js.map