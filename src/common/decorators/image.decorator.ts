import {
  createParamDecorator,
  ExecutionContext,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  UploadedFile,
} from '@nestjs/common';

export const UploadingImage = (
  fileType: string = 'image/(png|jpg|jpeg|webp)',
  maxSize: number = 3 * 1024 * 1024,
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
