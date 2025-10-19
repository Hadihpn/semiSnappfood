import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { MenuService } from '../service/menu.service';
import { CreateMenuDto } from '../dto/food.dto';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { MenuTypeService } from '../service/type.service';
import { FormType } from 'src/common/enums/form-type.enum';
import { MenuTypeDto } from '../dto/menu-type.dto';
import { SupplierAuth } from 'src/common/decorators/auth.decorator';

@Controller('menu-type')
@ApiTags('menu-type')
@SupplierAuth()
export class MenuTypeController {
  constructor(private readonly menuTypeService: MenuTypeService) {}

  @Post()
  @ApiConsumes(FormType.UrlEncoded, FormType.JSON)
  create(@Body() menuTypeDto: MenuTypeDto) {
    return this.menuTypeService.create(menuTypeDto);
  }

  @Get()
  findAll() {
    return this.menuTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuTypeService.findOneById(+id);
  }

  @Put(':id')
  @ApiConsumes(FormType.UrlEncoded, FormType.JSON)
  update(@Param('id') id: string, @Body() menuTypeDto: MenuTypeDto) {
    return this.menuTypeService.update(+id, menuTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuTypeService.delete(+id);
  }
}
