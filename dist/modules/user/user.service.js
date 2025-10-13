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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
const otp_service_1 = require("./otp.service");
let UserService = class UserService {
    userRepository;
    otpService;
    constructor(userRepository, otpService) {
        this.userRepository = userRepository;
        this.otpService = otpService;
    }
    async create(createUserDto) {
        const { mobile, otp_code, otp_expires_in } = createUserDto;
        const newUser = await this.userRepository.create({
            mobile,
        });
        await this.userRepository.save(newUser);
        const otp = await this.otpService.create({ code: otp_code, expires_in: otp_expires_in, userId: newUser.id });
        newUser.otpId = otp.id;
        await this.userRepository.save(newUser);
        return newUser;
    }
    findAll() {
        return `This action returns all user`;
    }
    findOne(id) {
        return `This action returns a #${id} user`;
    }
    async findOneByMobile(dto) {
        const { mobile } = dto;
        return await this.userRepository.findOne({
            where: { mobile },
            relations: { otp: true },
        });
    }
    async update(id, updateUserDto) {
        return await this.userRepository.update({ id }, updateUserDto);
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        otp_service_1.OtpService])
], UserService);
//# sourceMappingURL=user.service.js.map