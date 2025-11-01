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
            message: 'added food to your basket',
        };
    }
    async removeFromBasket(basketDto) {
        const userId = this.req.user?.id;
        const { foodId } = basketDto;
        const food = await this.menuService.getOne(foodId);
        let basketItem = await this.basketRepository.findOne({
            where: {
                userId,
                foodId,
            },
        });
        if (basketItem) {
            if (basketItem.count <= 1) {
                await this.basketRepository.delete({ id: basketItem.id });
            }
            else {
                basketItem.count -= 1;
            }
            await this.basketRepository.save(basketItem);
            return {
                message: 'remove item from basket successfully',
            };
        }
        throw new common_1.NotFoundException('cannot find any item');
    }
    async getBasket() { }
    async addDiscount(discountDto) {
        const { code } = discountDto;
        const userId = this.req.user?.id;
        const discount = await this.discountService.findOneByCode(code);
        if (!discount.active) {
            throw new common_1.BadRequestException('This discount code is not active');
        }
        if (discount.limit && discount.limit <= discount.usage) {
            throw new common_1.BadRequestException('The capacity of this discount code is full');
        }
        if (discount?.expires_in &&
            discount?.expires_in?.getTime() <= new Date().getTime()) {
            throw new common_1.BadRequestException('this discount code is expired');
        }
        const userBasketDiscount = await this.basketRepository.findOneBy({
            discountId: discount.id,
            userId,
        });
        if (userBasketDiscount) {
            throw new common_1.BadRequestException('Already used discount');
        }
        if (discount.supplierId) {
            const discountOfSupplier = await this.basketRepository.findOne({
                relations: {
                    discount: true,
                },
                where: {
                    userId,
                    discount: {
                        supplierId: discount.supplierId,
                    },
                },
            });
            if (discountOfSupplier) {
                throw new common_1.BadRequestException('you can not use several of supplier discount ');
            }
            const userBasket = await this.basketRepository.findOne({
                relations: {
                    food: true,
                },
                where: {
                    userId,
                    food: {
                        supplierId: discount.supplierId,
                    },
                },
            });
            if (!userBasket) {
                throw new common_1.BadRequestException('you can not use this discount code in basket');
            }
        }
        else if (!discount.supplierId) {
            const generalDiscount = await this.basketRepository.findOne({
                relations: {
                    discount: true,
                },
                where: {
                    userId,
                    discount: {
                        id: (0, typeorm_2.Not)((0, typeorm_2.IsNull)()),
                        supplierId: (0, typeorm_2.IsNull)(),
                    },
                },
            });
            if (generalDiscount) {
                throw new common_1.BadRequestException('Already used general discount');
            }
        }
        await this.basketRepository.insert({
            discountId: discount.id,
            userId,
        });
        return {
            message: 'You added discount code successfully',
        };
    }
    async removeDiscount(discountDto) {
        const { code } = discountDto;
        const userId = this.req.user?.id;
        const discount = await this.discountService.findOneByCode(code);
        const basketDiscount = await this.basketRepository.findOne({
            where: {
                discountId: discount.id,
            },
        });
        if (!basketDiscount)
            throw new common_1.BadRequestException("Not found discount in basket");
        await this.basketRepository.delete({ discountId: discount.id, userId });
        return {
            message: "You deleted discount code successfully",
        };
    }
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