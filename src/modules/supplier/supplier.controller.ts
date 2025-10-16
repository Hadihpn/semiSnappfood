import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SupplierService } from './supplier.service';
import {
  CreateSupplierDto,
  SupplementaryInformationDto,
} from './dto/supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { SupplierAuth } from 'src/common/decorators/auth.decorator';

@Controller('supplier')
export class SupplierController {
  constructor(private readonly supplierService: SupplierService) {}

  @Post()
  create(@Body() createSupplierDto: CreateSupplierDto) {
    return this.supplierService.create(createSupplierDto);
  }

  @Post('send-supplementary-information')
  @SupplierAuth()
  supplementaryInformation(
    @Body() supplementaryInformationDto: SupplementaryInformationDto,
  ) {
    try {
      return this.supplierService.saveSapplementaryInformation(
        supplementaryInformationDto,
      );
    } catch (error) {
      console.log(error);
    }
  }
  signup() {
    return this.supplierService.create;
  }
  @Get()
  findAll() {
    return this.supplierService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.supplierService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSupplierSignupDto: UpdateSupplierDto,
  ) {
    return this.supplierService.update(+id, updateSupplierSignupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.supplierService.remove(+id);
  }
}
