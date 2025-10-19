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
exports.MenuTypeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const type_service_1 = require("../service/type.service");
const form_type_enum_1 = require("../../../common/enums/form-type.enum");
const menu_type_dto_1 = require("../dto/menu-type.dto");
const auth_decorator_1 = require("../../../common/decorators/auth.decorator");
let MenuTypeController = class MenuTypeController {
    menuTypeService;
    constructor(menuTypeService) {
        this.menuTypeService = menuTypeService;
    }
    create(menuTypeDto) {
        return this.menuTypeService.create(menuTypeDto);
    }
    findAll() {
        return this.menuTypeService.findAll();
    }
    findOne(id) {
        return this.menuTypeService.findOneById(+id);
    }
    update(id, menuTypeDto) {
        return this.menuTypeService.update(+id, menuTypeDto);
    }
    remove(id) {
        return this.menuTypeService.delete(+id);
    }
};
exports.MenuTypeController = MenuTypeController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiConsumes)(form_type_enum_1.FormType.UrlEncoded, form_type_enum_1.FormType.JSON),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [menu_type_dto_1.MenuTypeDto]),
    __metadata("design:returntype", void 0)
], MenuTypeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MenuTypeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MenuTypeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiConsumes)(form_type_enum_1.FormType.UrlEncoded, form_type_enum_1.FormType.JSON),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, menu_type_dto_1.MenuTypeDto]),
    __metadata("design:returntype", void 0)
], MenuTypeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MenuTypeController.prototype, "remove", null);
exports.MenuTypeController = MenuTypeController = __decorate([
    (0, common_1.Controller)('menu-type'),
    (0, swagger_1.ApiTags)('menu-type'),
    (0, auth_decorator_1.SupplierAuth)(),
    __metadata("design:paramtypes", [type_service_1.MenuTypeService])
], MenuTypeController);
//# sourceMappingURL=type.controller.js.map