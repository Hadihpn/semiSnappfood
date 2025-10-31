import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DicountService } from './dicount.service';
import { CreateDicountDto } from './dto/create-dicount.dto';
import { UpdateDicountDto } from './dto/update-dicount.dto';

@Controller('dicount')
export class DicountController {
  constructor(private readonly dicountService: DicountService) {}

  @Post()
  create(@Body() createDicountDto: CreateDicountDto) {
    return this.dicountService.create(createDicountDto);
  }

  @Get()
  findAll() {
    return this.dicountService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dicountService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDicountDto: UpdateDicountDto) {
    return this.dicountService.update(+id, updateDicountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dicountService.remove(+id);
  }
}
