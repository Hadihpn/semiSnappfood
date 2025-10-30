import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UploadedFile, UploadedFiles } from '@nestjs/common';
import { MenuService } from '../service/menu.service';
import {  FoodDto } from '../dto/food.dto';
import { SupplierAuth } from 'src/common/decorators/auth.decorator';
import { SkipAuth } from 'src/common/decorators/skip-auth.decorator';

@Controller('menu')

export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  create(@Body() foodDto: FoodDto,@UploadedFiles() image:Express.Multer.File) {
    return this.menuService.create(image,foodDto);
  }

  @Get("/get-menu-by-id/:id")
  @SkipAuth()
  findAll(@Param("id", ParseIntPipe) id: number) {
    return this.menuService.findAll(id);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
  //   return this.menuService.update(+id, updateMenuDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuService.remove(+id);
  }
}
