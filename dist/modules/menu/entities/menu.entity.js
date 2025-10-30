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
exports.MenuEntity = void 0;
const entity_name_enum_1 = require("../../../common/enums/entity-name.enum");
const supplier_entity_1 = require("../../supplier/entities/supplier.entity");
const typeorm_1 = require("typeorm");
const type_entity_1 = require("./type.entity");
const feedback_entity_1 = require("./feedback.entity");
let MenuEntity = class MenuEntity {
    id;
    name;
    key;
    discount;
    image;
    price;
    dicsount;
    description;
    score;
    typeId;
    supplierId;
    supplier;
    type;
    feedbacks;
};
exports.MenuEntity = MenuEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], MenuEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MenuEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MenuEntity.prototype, "key", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double', default: 0 }),
    __metadata("design:type", Number)
], MenuEntity.prototype, "discount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MenuEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double' }),
    __metadata("design:type", Number)
], MenuEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double', default: 0 }),
    __metadata("design:type", Number)
], MenuEntity.prototype, "dicsount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MenuEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double' }),
    __metadata("design:type", Number)
], MenuEntity.prototype, "score", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], MenuEntity.prototype, "typeId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], MenuEntity.prototype, "supplierId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => supplier_entity_1.SupplierEntity, (supplier) => supplier.menu, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", supplier_entity_1.SupplierEntity)
], MenuEntity.prototype, "supplier", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => type_entity_1.TypeEntity, (type) => type.items),
    __metadata("design:type", type_entity_1.TypeEntity)
], MenuEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => feedback_entity_1.FeedbackEntity, (feedback) => feedback.food),
    __metadata("design:type", Array)
], MenuEntity.prototype, "feedbacks", void 0);
exports.MenuEntity = MenuEntity = __decorate([
    (0, typeorm_1.Entity)(entity_name_enum_1.EntityEnums.Menu)
], MenuEntity);
//# sourceMappingURL=menu.entity.js.map