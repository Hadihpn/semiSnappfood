"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuEntity = void 0;
const entity_name_enum_1 = require("../../../common/enums/entity-name.enum");
const typeorm_1 = require("typeorm");
let MenuEntity = class MenuEntity {
};
exports.MenuEntity = MenuEntity;
exports.MenuEntity = MenuEntity = __decorate([
    (0, typeorm_1.Entity)(entity_name_enum_1.EntityEnums.Menu)
], MenuEntity);
//# sourceMappingURL=menu.entity.js.map