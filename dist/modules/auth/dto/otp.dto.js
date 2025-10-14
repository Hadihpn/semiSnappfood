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
exports.CheckOtpDto = exports.SendSupplierOtpDto = exports.SendOtpDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class SendOtpDto {
    mobile;
}
exports.SendOtpDto = SendOtpDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsMobilePhone)('fa-IR', {}, { message: 'mobile number is invalid' }),
    __metadata("design:type", String)
], SendOtpDto.prototype, "mobile", void 0);
class SendSupplierOtpDto {
    categoryId;
    store_name;
    city;
    manager_name;
    manager_family;
    mobile;
    invite_code;
}
exports.SendSupplierOtpDto = SendSupplierOtpDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], SendSupplierOtpDto.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.Length)(3, 50),
    __metadata("design:type", String)
], SendSupplierOtpDto.prototype, "store_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SendSupplierOtpDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.Length)(3, 50),
    __metadata("design:type", String)
], SendSupplierOtpDto.prototype, "manager_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.Length)(3, 50),
    __metadata("design:type", String)
], SendSupplierOtpDto.prototype, "manager_family", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsMobilePhone)('fa-IR', {}, { message: 'mobile number is invalid' }),
    __metadata("design:type", String)
], SendSupplierOtpDto.prototype, "mobile", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SendSupplierOtpDto.prototype, "invite_code", void 0);
class CheckOtpDto {
    mobile;
    code;
}
exports.CheckOtpDto = CheckOtpDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsMobilePhone)('fa-IR', {}, { message: 'mobile number is invalid' }),
    __metadata("design:type", String)
], CheckOtpDto.prototype, "mobile", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 5, { message: 'incorrect code' }),
    __metadata("design:type", String)
], CheckOtpDto.prototype, "code", void 0);
//# sourceMappingURL=otp.dto.js.map