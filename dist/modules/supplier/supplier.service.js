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
const core_1 = require("@nestjs/core");
const status_enum_1 = require("./enum/status.enum");
const s3_services_1 = require("../s3/s3.services");
let SupplierService = class SupplierService {
    supplierRepository;
    supplierOtpService;
    req;
    s3Service;
    constructor(supplierRepository, supplierOtpService, req, s3Service) {
        this.supplierRepository = supplierRepository;
        this.supplierOtpService = supplierOtpService;
        this.req = req;
        this.s3Service = s3Service;
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
    async findOne(id) {
        const supplier = await this.supplierRepository.findOneBy({ id });
        if (!supplier)
            throw new common_1.NotFoundException('supplier not found');
        return supplier;
    }
    async findOneByMobile(mobile) {
        return await this.supplierRepository.findOneBy({ mobile });
    }
    update(id, updateSupplierDto) {
        return `This action updates a #${id} supplier`;
    }
    async saveSapplementaryInformation(infoDto) {
        const id = this.req?.user?.id;
        const { email, national_code } = infoDto;
        let supplier = await this.supplierRepository.findOneBy({ email });
        if (supplier && supplier.id !== id) {
            throw new common_1.ConflictException('this supplier with this email already exist');
        }
        supplier = await this.supplierRepository.findOneBy({ national_code });
        if (supplier && supplier.id !== id) {
            throw new common_1.ConflictException('this supplier with this national_code already exist');
        }
        await this.supplierRepository.update({ id }, {
            email,
            national_code,
            status: status_enum_1.SupplementaryStatus.SupplemntaryInformation,
        });
        return {
            message: 'supplementary information updated succesfully',
        };
    }
    remove(id) {
        return `This action removes a #${id} supplier`;
    }
    async uploadDocuments(files) {
        const id = this.req?.user?.id;
        if (!id)
            throw new common_1.NotFoundException('supplier not found');
        const supplier = await this.findOne(id);
        const { image, acceptedDoc } = files;
        const imageResult = await this.s3Service.uploadFile(image[0], 'supplier/images');
        const acceptedDocResult = await this.s3Service.uploadFile(acceptedDoc[0], 'supplier/acceptedDocs');
        if (imageResult)
            supplier.image = imageResult.Location;
        if (acceptedDocResult)
            supplier.document = acceptedDocResult.Location;
        supplier.status = status_enum_1.SupplementaryStatus.UploadedDocument;
        await this.supplierRepository.save(supplier);
        console.log(files);
    }
};
exports.SupplierService = SupplierService;
exports.SupplierService = SupplierService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, typeorm_2.InjectRepository)(supplier_entity_1.SupplierEntity)),
    __param(2, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        supplier_otp_service_1.SupplierOtpService, Object, s3_services_1.S3Services])
], SupplierService);
//# sourceMappingURL=supplier.service.js.map