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
exports.OtpService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const otp_entity_1 = require("./entities/otp.entity");
let OtpService = class OtpService {
    otpRepository;
    constructor(otpRepository) {
        this.otpRepository = otpRepository;
    }
    async create(createOtpDto) {
        const { userId, code, expires_in } = createOtpDto;
        const newOtp = await this.otpRepository.create({
            code,
            userId,
            expires_in: expires_in,
        });
        await this.otpRepository.save(newOtp);
        return newOtp;
    }
    findAll() {
        return `This action returns all user`;
    }
    findOne(id) {
        return `This action returns a #${id} user`;
    }
    async update(id, updateOtpDto) {
        await this.otpRepository.update({ id }, updateOtpDto);
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
exports.OtpService = OtpService;
exports.OtpService = OtpService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(otp_entity_1.OTPEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OtpService);
//# sourceMappingURL=otp.service.js.map