"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./auth.controller");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
const user_entity_1 = require("../user/entities/user.entity");
const otp_entity_1 = require("../user/entities/otp.entity");
const auth_services_1 = require("./auth.services");
const user_service_1 = require("../user/user.service");
const otp_service_1 = require("../user/otp.service");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity, otp_entity_1.OTPEntity])],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_services_1.AuthService, jwt_1.JwtService, user_service_1.UserService, otp_service_1.OtpService],
        exports: [auth_services_1.AuthService, jwt_1.JwtService, typeorm_1.TypeOrmModule],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map