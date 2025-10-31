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
exports.DiscountService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const dicount_entity_1 = require("./entities/dicount.entity");
const typeorm_2 = require("@nestjs/typeorm");
let DiscountService = class DiscountService {
    discountRepository;
    constructor(discountRepository) {
        this.discountRepository = discountRepository;
    }
    async create(discountDto) {
        const { amount, code, starts_in, expires_in, limit, percent } = discountDto;
        await this.checkExistCode(code);
        const discountObject = { code };
        if ((!amount && !percent) || (amount && percent)) {
            throw new common_1.BadRequestException('You must enter one of the amount or percent fields ');
        }
        if (amount && !isNaN(parseFloat(amount.toString()))) {
            discountObject['amount'] = amount;
        }
        else if (percent && !isNaN(parseFloat(percent.toString()))) {
            discountObject['percent'] = percent;
        }
        if (starts_in && !isNaN(parseInt(starts_in.toString()))) {
            const time = 1000 * 60 * 60 * 24 * starts_in;
            discountObject['starts_in'] = new Date(new Date().getTime() + time);
        }
        if (expires_in && !isNaN(parseInt(expires_in.toString()))) {
            const time = 1000 * 60 * 60 * 24 * expires_in;
            discountObject['expires_in'] = new Date(new Date().getTime() + time);
        }
        if (limit && !isNaN(parseInt(limit.toString()))) {
            discountObject['limit'] = limit;
        }
        const discount = this.discountRepository.create(discountObject);
        await this.discountRepository.save(discount);
        return {
            message: 'created',
        };
    }
    async checkExistCode(code) {
        const discount = await this.discountRepository.findOneBy({ code });
        if (discount)
            throw new common_1.ConflictException('already exist code');
    }
    async findOneByCode(code) {
        const discount = await this.discountRepository.findOneBy({ code });
        if (!discount)
            throw new common_1.NotFoundException('not found discount code');
        return discount;
    }
    async findAll() {
        return await this.discountRepository.find({});
    }
    async remove(id) {
        const discount = await this.discountRepository.findOneBy({ id });
        if (!discount)
            throw new common_1.NotFoundException();
        await this.discountRepository.delete({ id });
        return {
            message: 'deleted',
        };
    }
};
exports.DiscountService = DiscountService;
exports.DiscountService = DiscountService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(dicount_entity_1.DiscountEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], DiscountService);
//# sourceMappingURL=dicount.service.js.map