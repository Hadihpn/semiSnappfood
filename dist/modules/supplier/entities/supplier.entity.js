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
exports.SupplierEntity = void 0;
const entity_name_enum_1 = require("../../../common/enums/entity-name.enum");
const category_entity_1 = require("../../category/entities/category.entity");
const typeorm_1 = require("typeorm");
const supplier_otp_entity_1 = require("./supplier_otp.entity");
const status_enum_1 = require("../enum/status.enum");
let SupplierEntity = class SupplierEntity {
    id;
    manager_name;
    manager_family;
    store_name;
    city;
    mobile;
    invite_code;
    mobile_verify;
    categoryId;
    otpId;
    category;
    email;
    national_code;
    status;
    agentId;
    image;
    document;
    agent;
    subsets;
    otp;
};
exports.SupplierEntity = SupplierEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], SupplierEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SupplierEntity.prototype, "manager_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SupplierEntity.prototype, "manager_family", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SupplierEntity.prototype, "store_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SupplierEntity.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SupplierEntity.prototype, "mobile", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SupplierEntity.prototype, "invite_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: false }),
    __metadata("design:type", Boolean)
], SupplierEntity.prototype, "mobile_verify", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], SupplierEntity.prototype, "categoryId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], SupplierEntity.prototype, "otpId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.CategoryEntity, (category) => category.suppliers, {
        onDelete: 'SET NULL',
    }),
    __metadata("design:type", category_entity_1.CategoryEntity)
], SupplierEntity.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], SupplierEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], SupplierEntity.prototype, "national_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: status_enum_1.SupplementaryStatus.SignUp }),
    __metadata("design:type", String)
], SupplierEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], SupplierEntity.prototype, "agentId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], SupplierEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], SupplierEntity.prototype, "document", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => SupplierEntity, (supplier) => supplier.subsets),
    __metadata("design:type", SupplierEntity)
], SupplierEntity.prototype, "agent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => SupplierEntity, (supplier) => supplier.agent),
    __metadata("design:type", Array)
], SupplierEntity.prototype, "subsets", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => supplier_otp_entity_1.SupplierOTPEntity, (otp) => otp.supplier),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", supplier_otp_entity_1.SupplierOTPEntity)
], SupplierEntity.prototype, "otp", void 0);
exports.SupplierEntity = SupplierEntity = __decorate([
    (0, typeorm_1.Entity)(entity_name_enum_1.EntityEnums.Supplier)
], SupplierEntity);
//# sourceMappingURL=supplier.entity.js.map