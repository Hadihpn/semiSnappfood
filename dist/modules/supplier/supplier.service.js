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
exports.SupplierService = void 0;
const common_1 = require("@nestjs/common");
const supplier_entity_1 = require("./entities/supplier.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const supplier_otp_service_1 = require("./supplier_otp.service");
let SupplierService = class SupplierService {
    supplierRepository;
    supplierOtpService;
    constructor(supplierRepository, supplierOtpService) {
        this.supplierRepository = supplierRepository;
        this.supplierOtpService = supplierOtpService;
    }
    async create(createSupplierDto) {
        const { categoryId, city, invite_code, manager_family, manager_name, mobile, store_name, otp_code, otp_expires_in, } = createSupplierDto;
        let agent = null;
        if (invite_code) {
            agent = await this.supplierRepository.findOneBy({ invite_code });
        }
        const mobileNumber = parseInt(mobile);
        const newSupplier = this.supplierRepository.create({
            manager_name,
            manager_family,
            mobile,
            categoryId,
            city,
            store_name,
            agentId: agent?.id,
            invite_code: mobileNumber.toString(32).toUpperCase(),
        });
        await this.supplierRepository.save(newSupplier);
        const otp = await this.supplierOtpService.create({
            code: otp_code,
            expires_in: otp_expires_in,
            supplierId: newSupplier.id,
        });
        newSupplier.otpId = otp.id;
        await this.supplierRepository.save(newSupplier);
        return newSupplier;
    }
    findAll() {
        return `This action returns all supplier`;
    }
    findOne(id) {
        return `This action returns a #${id} supplier`;
    }
    async findOneByMobile(mobile) {
        return await this.supplierRepository.findOneBy({ mobile });
    }
    update(id, updateSupplierDto) {
        return `This action updates a #${id} supplier`;
    }
    remove(id) {
        return `This action removes a #${id} supplier`;
    }
};
exports.SupplierService = SupplierService;
exports.SupplierService = SupplierService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(supplier_entity_1.SupplierEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        supplier_otp_service_1.SupplierOtpService])
], SupplierService);
//# sourceMappingURL=supplier.service.js.map