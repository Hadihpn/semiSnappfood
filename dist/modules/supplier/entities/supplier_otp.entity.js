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
exports.SupplierOTPEntity = void 0;
const typeorm_1 = require("typeorm");
const entity_name_enum_1 = require("../../../common/enums/entity-name.enum");
const supplier_entity_1 = require("./supplier.entity");
let SupplierOTPEntity = class SupplierOTPEntity {
    id;
    code;
    expires_in;
    supplierId;
    supplier;
};
exports.SupplierOTPEntity = SupplierOTPEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], SupplierOTPEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SupplierOTPEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], SupplierOTPEntity.prototype, "expires_in", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SupplierOTPEntity.prototype, "supplierId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => supplier_entity_1.SupplierEntity, (supplier) => supplier.otp, { onDelete: "CASCADE" }),
    __metadata("design:type", supplier_entity_1.SupplierEntity)
], SupplierOTPEntity.prototype, "supplier", void 0);
exports.SupplierOTPEntity = SupplierOTPEntity = __decorate([
    (0, typeorm_1.Entity)(entity_name_enum_1.EntityEnums.SupplierOtp)
], SupplierOTPEntity);
//# sourceMappingURL=supplier_otp.entity.js.map