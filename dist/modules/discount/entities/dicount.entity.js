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
exports.DiscountEntity = void 0;
const entity_name_enum_1 = require("../../../common/enums/entity-name.enum");
const basket_entity_1 = require("../../basket/entities/basket.entity");
const menu_entity_1 = require("../../menu/entities/menu.entity");
const typeorm_1 = require("typeorm");
let DiscountEntity = class DiscountEntity {
    id;
    code;
    percent;
    amount;
    start_in;
    expires_in;
    limit;
    usage;
    supplierId;
    active;
    food;
    baskets;
};
exports.DiscountEntity = DiscountEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], DiscountEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DiscountEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double', nullable: true }),
    __metadata("design:type", Number)
], DiscountEntity.prototype, "percent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double', nullable: true }),
    __metadata("design:type", Number)
], DiscountEntity.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], DiscountEntity.prototype, "start_in", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], DiscountEntity.prototype, "expires_in", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], DiscountEntity.prototype, "limit", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: 0 }),
    __metadata("design:type", Number)
], DiscountEntity.prototype, "usage", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], DiscountEntity.prototype, "supplierId", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], DiscountEntity.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => menu_entity_1.MenuEntity, (food) => food.baskets, { onDelete: 'CASCADE' }),
    __metadata("design:type", menu_entity_1.MenuEntity)
], DiscountEntity.prototype, "food", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => basket_entity_1.UserBasketEntity, basket => basket.discount),
    __metadata("design:type", Array)
], DiscountEntity.prototype, "baskets", void 0);
exports.DiscountEntity = DiscountEntity = __decorate([
    (0, typeorm_1.Entity)(entity_name_enum_1.EntityEnums.Discount)
], DiscountEntity);
//# sourceMappingURL=dicount.entity.js.map