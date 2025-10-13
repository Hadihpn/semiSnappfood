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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryEntity = void 0;
const base_entity_1 = require("../../../common/abstracts/base.entity");
const entity_name_enum_1 = require("../../../common/enums/entity-name.enum");
const typeorm_1 = require("typeorm");
let CategoryEntity = class CategoryEntity extends base_entity_1.BaseEntity {
    title;
    slug;
    image;
    imageKey;
    show;
    parentId;
    parent;
    children;
};
exports.CategoryEntity = CategoryEntity;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CategoryEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], CategoryEntity.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CategoryEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CategoryEntity.prototype, "imageKey", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], CategoryEntity.prototype, "show", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CategoryEntity.prototype, "parentId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CategoryEntity, (category) => category.children, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", CategoryEntity)
], CategoryEntity.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CategoryEntity, (category) => category.parent),
    __metadata("design:type", Array)
], CategoryEntity.prototype, "children", void 0);
exports.CategoryEntity = CategoryEntity = __decorate([
    (0, typeorm_1.Entity)(entity_name_enum_1.EntityEnums.Category)
], CategoryEntity);
//# sourceMappingURL=category.entity.js.map