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
exports.SupplierOtpService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const supplier_otp_entity_1 = require("./entities/supplier_otp.entity");
let SupplierOtpService = class SupplierOtpService {
    supplierOtpRepository;
    constructor(supplierOtpRepository) {
        this.supplierOtpRepository = supplierOtpRepository;
    }
    async create(createSupllierOtpDto) {
        const { supplierId, code, expires_in } = createSupllierOtpDto;
        const newOtp = await this.supplierOtpRepository.create({
            code,
            supplierId,
            expires_in: expires_in,
        });
        await this.supplierOtpRepository.save(newOtp);
        return newOtp;
    }
    findAll() {
        return `This action returns all user`;
    }
    findOne(id) {
        return `This action returns a #${id} user`;
    }
    async update(id, updateSupplierOtpDto) {
        await this.supplierOtpRepository.update({ id }, updateSupplierOtpDto);
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
exports.SupplierOtpService = SupplierOtpService;
exports.SupplierOtpService = SupplierOtpService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(supplier_otp_entity_1.SupplierOTPEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SupplierOtpService);
//# sourceMappingURL=supplier_otp.service.js.map