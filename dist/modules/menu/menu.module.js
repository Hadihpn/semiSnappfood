"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuModule = void 0;
const common_1 = require("@nestjs/common");
const menu_service_1 = require("./service/menu.service");
const typeorm_1 = require("@nestjs/typeorm");
const feedback_entity_1 = require("./entities/feedback.entity");
const menu_entity_1 = require("./entities/menu.entity");
const type_entity_1 = require("./entities/type.entity");
const menu_controller_1 = require("./controllers/menu.controller");
const feedback_controller_1 = require("./controllers/feedback.controller");
const type_controller_1 = require("./controllers/type.controller");
const type_service_1 = require("./service/type.service");
const auth_module_1 = require("../auth/auth.module");
let MenuModule = class MenuModule {
};
exports.MenuModule = MenuModule;
exports.MenuModule = MenuModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([feedback_entity_1.FeedbackEntity, menu_entity_1.MenuEntity, type_entity_1.TypeEntity]), auth_module_1.AuthModule],
        controllers: [menu_controller_1.MenuController, feedback_controller_1.FeedbackController, type_controller_1.MenuTypeController],
        providers: [menu_service_1.MenuService, type_service_1.MenuTypeService],
    })
], MenuModule);
//# sourceMappingURL=menu.module.js.map