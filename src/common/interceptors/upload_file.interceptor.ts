import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';

export function UploadFileS3(fieldName: string) {
  console.log("UploadFileS3",fieldName);
  
  return class UploadUtility extends FileInterceptor(fieldName, {
    storage: memoryStorage(),
  }) {};
}
