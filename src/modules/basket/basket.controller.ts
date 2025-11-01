import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BasketService } from './basket.service';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { BasketDto, DiscountBasketDto } from './dto/basket.dto';
import { UserAuth } from 'src/common/decorators/auth.decorator';
import { FormType } from 'src/common/enums/form-type.enum';

@Controller('basket')
@ApiTags('Basket')
@UserAuth()
export class BasketController {
  constructor(private readonly basketService: BasketService) {}

  @Post()
  @ApiConsumes(FormType.UrlEncoded, FormType.JSON)
  addToBasket(@Body() createBasketDto: BasketDto) {
    return this.basketService.addToBasket(createBasketDto);
  }

  @Get()
  findAll() {
    return this.basketService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.basketService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBasketDto: UpdateBasketDto) {
  //   return this.basketService.update(+id, updateBasketDto);
  // }

  @Delete(':id')
  remove(@Param('id') basketDto: BasketDto) {
    try {
      return this.basketService.removeFromBasket(basketDto);
    } catch (error) {
      console.log(error);
    }
  }
   @Post("/discount")
  @ApiConsumes(FormType.UrlEncoded, FormType.JSON)
  addDiscountToBasket(@Body() discountDto: DiscountBasketDto) {
    return this.basketService.addDiscount(discountDto);
  }
    @Delete("/discount")
  @ApiConsumes(FormType.UrlEncoded, FormType.JSON)
  removeDiscountFromBasket(@Body() discountDto: DiscountBasketDto) {
    return this.basketService.removeDiscount(discountDto);
  }

}
