"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketModule = void 0;
const common_1 = require("@nestjs/common");
const basket_service_1 = require("./basket.service");
const basket_controller_1 = require("./basket.controller");
const auth_module_1 = require("../auth/auth.module");
const menu_module_1 = require("../menu/menu.module");
const typeorm_1 = require("@nestjs/typeorm");
const basket_entity_1 = require("./entities/basket.entity");
const dicount_entity_1 = require("../discount/entities/dicount.entity");
const dicount_service_1 = require("../discount/dicount.service");
let BasketModule = class BasketModule {
};
exports.BasketModule = BasketModule;
exports.BasketModule = BasketModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            menu_module_1.MenuModule,
            typeorm_1.TypeOrmModule.forFeature([basket_entity_1.UserBasketEntity, dicount_entity_1.DiscountEntity]),
        ],
        controllers: [basket_controller_1.BasketController],
        providers: [basket_service_1.BasketService, dicount_service_1.DiscountService],
    })
], BasketModule);
//# sourceMappingURL=basket.module.js.map