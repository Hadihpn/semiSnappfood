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
exports.DiscountController = void 0;
const common_1 = require("@nestjs/common");
const dicount_service_1 = require("./dicount.service");
const dicount_dto_1 = require("./dto/dicount.dto");
const swagger_1 = require("@nestjs/swagger");
const form_type_enum_1 = require("../../common/enums/form-type.enum");
let DiscountController = class DiscountController {
    discountService;
    constructor(discountService) {
        this.discountService = discountService;
    }
    create(discountDto) {
        return this.discountService.create(discountDto);
    }
    findAll() {
        return this.discountService.findAll();
    }
    remove(id) {
        return this.discountService.remove(id);
    }
};
exports.DiscountController = DiscountController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiConsumes)(form_type_enum_1.FormType.UrlEncoded, form_type_enum_1.FormType.JSON),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dicount_dto_1.DiscountDto]),
    __metadata("design:returntype", void 0)
], DiscountController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DiscountController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)("/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DiscountController.prototype, "remove", null);
exports.DiscountController = DiscountController = __decorate([
    (0, common_1.Controller)("discount"),
    (0, swagger_1.ApiTags)("Discount"),
    __metadata("design:paramtypes", [dicount_service_1.DiscountService])
], DiscountController);
//# sourceMappingURL=dicount.controller.js.map