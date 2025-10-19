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
exports.MenuTypeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const type_entity_1 = require("../entities/type.entity");
const typeorm_2 = require("typeorm");
const core_1 = require("@nestjs/core");
let MenuTypeService = class MenuTypeService {
    typeRepository;
    req;
    constructor(typeRepository, req) {
        this.typeRepository = typeRepository;
        this.req = req;
    }
    async create(createDto) {
        const id = this.req.user?.id;
        if (!id || isNaN(id))
            throw new common_1.NotFoundException('cannot find supplier');
        const type = await this.typeRepository.create({
            title: createDto.title,
            supplierId: id,
        });
        await this.typeRepository.save(type);
        return {
            message: 'type created successfully',
        };
    }
    async findAll() {
        const supplierId = this.req.user?.id;
        if (!supplierId || isNaN(supplierId))
            throw new common_1.NotFoundException('cannot find supplier');
        return await this.typeRepository.findAndCount({
            where: { supplierId },
            order: { id: 'DESC' },
        });
    }
    async findOneById(id) {
        const supplierId = this.req.user?.id;
        if (!supplierId || isNaN(supplierId))
            throw new common_1.NotFoundException('cannot find supplier');
        const type = await this.typeRepository.findOneBy({ id, supplierId });
        if (!type)
            throw new common_1.NotFoundException('cannot find any type');
        return type;
    }
    async delete(id) {
        const type = await this.typeRepository.findOneBy({ id });
        if (!type)
            throw new common_1.NotFoundException('cannot find any type');
        await this.typeRepository.delete(type);
        return {
            message: 'the type deleted successfully',
        };
    }
    async update(id, menuTypeDto) {
        let type = await this.findOneById(id);
        const { title, priority } = menuTypeDto;
        if (title)
            type.title = title;
        if (priority)
            type.priority = priority;
        await this.typeRepository.save(type);
        return {
            message: 'type updated successfully',
        };
    }
};
exports.MenuTypeService = MenuTypeService;
exports.MenuTypeService = MenuTypeService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, typeorm_1.InjectRepository)(type_entity_1.TypeEntity)),
    __param(1, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [typeorm_2.Repository, Object])
], MenuTypeService);
//# sourceMappingURL=type.service.js.map