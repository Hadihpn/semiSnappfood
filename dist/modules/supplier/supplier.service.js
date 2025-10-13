"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierService = void 0;
const common_1 = require("@nestjs/common");
let SupplierService = class SupplierService {
    create(createSupplierDto) {
        return 'This action adds a new supplier';
    }
    findAll() {
        return `This action returns all supplier`;
    }
    findOne(id) {
        return `This action returns a #${id} supplier`;
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
    (0, common_1.Injectable)()
], SupplierService);
//# sourceMappingURL=supplier.service.js.map