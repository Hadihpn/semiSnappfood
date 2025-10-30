export declare class FoodDto {
    name: string;
    image: string;
    price: number;
    discount: number;
    description: string;
    typeId: number;
}
declare const UpdateFoodDto_base: import("@nestjs/common").Type<Partial<FoodDto>>;
export declare class UpdateFoodDto extends UpdateFoodDto_base {
}
export {};
