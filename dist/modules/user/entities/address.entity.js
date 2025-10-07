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
exports.UserAddress = void 0;
const entity_name_enum_1 = require("../../../common/enums/entity-name.enum");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const base_entity_1 = require("../../../common/abstracts/base.entity");
let UserAddress = class UserAddress extends base_entity_1.BaseEntity {
    title;
    province;
    city;
    address;
    postal_code;
    created_at;
    userId;
    user;
};
exports.UserAddress = UserAddress;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserAddress.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserAddress.prototype, "province", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserAddress.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserAddress.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserAddress.prototype, "postal_code", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], UserAddress.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserAddress.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.addressList, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", user_entity_1.UserEntity)
], UserAddress.prototype, "user", void 0);
exports.UserAddress = UserAddress = __decorate([
    (0, typeorm_1.Entity)(entity_name_enum_1.EntityEnums.USERAddress)
], UserAddress);
//# sourceMappingURL=address.entity.js.map