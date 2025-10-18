import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { SupplierService } from './supplier.service';
import {
  CreateSupplierDto,
  SupplementaryInformationDto,
  UploadDocsDto,
} from './dto/supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { SupplierAuth } from 'src/common/decorators/auth.decorator';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { UploadFileFieldsS3 } from 'src/common/interceptors/upload_file.interceptor';
import { ApiConsumes } from '@nestjs/swagger';
import { FormType } from 'src/common/enums/form-type.enum';

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
  @Put('upload-documents')
  @ApiConsumes(FormType.Multipart)
  @SupplierAuth( )
  @UseInterceptors(
    UploadFileFieldsS3([
      { name: 'acceptedDoc', maxCount: 1 },
      { name: 'image', maxCount: 1 },
    ]),
  )
  async UploadDocument(@Body() infoDto:UploadDocsDto,@UploadedFiles() file:any){
return this.supplierService.uploadDocuments(file)
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
