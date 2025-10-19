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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackEntity = void 0;
const entity_name_enum_1 = require("../../../common/enums/entity-name.enum");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
const menu_entity_1 = require("./menu.entity");
let FeedbackEntity = class FeedbackEntity {
    id;
    userId;
    foodId;
    comment;
    user;
    food;
};
exports.FeedbackEntity = FeedbackEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], FeedbackEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], FeedbackEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], FeedbackEntity.prototype, "foodId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FeedbackEntity.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.feedbacks, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", user_entity_1.UserEntity)
], FeedbackEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => menu_entity_1.MenuEntity, (food) => food.feedbacks, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", menu_entity_1.MenuEntity)
], FeedbackEntity.prototype, "food", void 0);
exports.FeedbackEntity = FeedbackEntity = __decorate([
    (0, typeorm_1.Entity)(entity_name_enum_1.EntityEnums.Feedbacks)
], FeedbackEntity);
//# sourceMappingURL=feedback.entity.js.map