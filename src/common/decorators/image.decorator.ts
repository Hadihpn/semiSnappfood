import {
  createParamDecorator,
  ExecutionContext,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  UploadedFile,
} from '@nestjs/common';
import { ValidatorsEnum } from '../enums/validatos.enum';

export const  UploadingImage = (
  fileType: string = ValidatorsEnum.imageFileType,
  maxSize: number = ValidatorsEnum.maxSizeCategoryImage,
) => {
  return UploadedFile(
    new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize }),
        new FileTypeValidator({ fileType }),
      ],
    }),
  );
};
