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
exports.UserBasketEntity = void 0;
const entity_name_enum_1 = require("../../../common/enums/entity-name.enum");
const dicount_entity_1 = require("../../discount/entities/dicount.entity");
const menu_entity_1 = require("../../menu/entities/menu.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
const discount_type_1 = require("../enum/discount-type");
let UserBasketEntity = class UserBasketEntity {
    id;
    foodId;
    userId;
    count;
    type;
    discountId;
    created_at;
    food;
    user;
    discount;
};
exports.UserBasketEntity = UserBasketEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], UserBasketEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserBasketEntity.prototype, "foodId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserBasketEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], UserBasketEntity.prototype, "count", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: discount_type_1.BasketDiscountType, nullable: true }),
    __metadata("design:type", String)
], UserBasketEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserBasketEntity.prototype, "discountId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], UserBasketEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => menu_entity_1.MenuEntity, (food) => food.baskets, { onDelete: 'CASCADE' }),
    __metadata("design:type", menu_entity_1.MenuEntity)
], UserBasketEntity.prototype, "food", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.basket, { onDelete: 'CASCADE' }),
    __metadata("design:type", user_entity_1.UserEntity)
], UserBasketEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => dicount_entity_1.DiscountEntity, (discount) => discount.baskets, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", dicount_entity_1.DiscountEntity)
], UserBasketEntity.prototype, "discount", void 0);
exports.UserBasketEntity = UserBasketEntity = __decorate([
    (0, typeorm_1.Entity)(entity_name_enum_1.EntityEnums.UserBasket)
], UserBasketEntity);
//# sourceMappingURL=basket.entity.js.map