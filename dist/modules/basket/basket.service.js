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
exports.BasketService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const basket_entity_1 = require("./entities/basket.entity");
const typeorm_2 = require("typeorm");
const core_1 = require("@nestjs/core");
const menu_service_1 = require("../menu/service/menu.service");
const dicount_entity_1 = require("../discount/entities/dicount.entity");
const dicount_service_1 = require("../discount/dicount.service");
let BasketService = class BasketService {
    basketRepository;
    discountRepository;
    menuService;
    discountService;
    req;
    constructor(basketRepository, discountRepository, menuService, discountService, req) {
        this.basketRepository = basketRepository;
        this.discountRepository = discountRepository;
        this.menuService = menuService;
        this.discountService = discountService;
        this.req = req;
    }
    findAll() {
        return `This action returns all basket`;
    }
    findOne(id) {
        return `This action returns a #${id} basket`;
    }
    remove(id) {
        return `This action removes a #${id} basket`;
    }
    async addToBasket(createBasketDto) {
        const userId = this.req.user?.id;
        const { foodId } = createBasketDto;
        const food = await this.menuService.getOne(foodId);
        let basketItem = await this.basketRepository.findOne({
            where: {
                userId,
                foodId,
            },
        });
        if (basketItem) {
            basketItem.count += 1;
        }
        else {
            basketItem = this.basketRepository.create({
                foodId,
                userId,
                count: 1,
            });
        }
        await this.basketRepository.save(basketItem);
        return {
            message: "added food to your basket",
        };
    }
    async removeFromBasket() { }
    async getBasket() { }
    async addDiscount() { }
    async removeDiscount() { }
};
exports.BasketService = BasketService;
exports.BasketService = BasketService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, typeorm_1.InjectRepository)(basket_entity_1.UserBasketEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(dicount_entity_1.DiscountEntity)),
    __param(4, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        menu_service_1.MenuService,
        dicount_service_1.DiscountService, Object])
], BasketService);
//# sourceMappingURL=basket.service.js.map