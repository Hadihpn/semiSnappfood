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
exports.TypeEntity = void 0;
const entity_name_enum_1 = require("../../../common/enums/entity-name.enum");
const supplier_entity_1 = require("../../supplier/entities/supplier.entity");
const typeorm_1 = require("typeorm");
const menu_entity_1 = require("./menu.entity");
let TypeEntity = class TypeEntity {
    id;
    title;
    priority;
    supplierId;
    supplier;
    items;
};
exports.TypeEntity = TypeEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], TypeEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TypeEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], TypeEntity.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TypeEntity.prototype, "supplierId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => supplier_entity_1.SupplierEntity, (supplier) => supplier.menuTypes, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", supplier_entity_1.SupplierEntity)
], TypeEntity.prototype, "supplier", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => menu_entity_1.MenuEntity, (food) => food.type),
    __metadata("design:type", Array)
], TypeEntity.prototype, "items", void 0);
exports.TypeEntity = TypeEntity = __decorate([
    (0, typeorm_1.Entity)(entity_name_enum_1.EntityEnums.MenuType)
], TypeEntity);
//# sourceMappingURL=type.entity.js.map