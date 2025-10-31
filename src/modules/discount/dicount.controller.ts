import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { DiscountService } from './dicount.service';
import { DiscountDto } from './dto/dicount.dto';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FormType } from 'src/common/enums/form-type.enum';


@Controller("discount")
@ApiTags("Discount")
export class DiscountController {
  constructor(private discountService: DiscountService) {}

  @Post()
  @ApiConsumes(FormType.UrlEncoded, FormType.JSON)
  create(@Body() discountDto: DiscountDto) {
    return this.discountService.create(discountDto);
  }
  @Get()
  findAll() {
    return this.discountService.findAll();
  }
  @Delete("/:id")
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.discountService.remove(id);
  }
}
