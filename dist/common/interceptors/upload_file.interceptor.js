"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadFileS3 = UploadFileS3;
exports.UploadFileFieldsS3 = UploadFileFieldsS3;
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
function UploadFileS3(fieldName) {
    console.log('UploadFileS3', fieldName);
    return class UploadUtility extends (0, platform_express_1.FileInterceptor)(fieldName, {
        storage: (0, multer_1.memoryStorage)(),
    }) {
    };
}
function UploadFileFieldsS3(uploadFields) {
    return class UploadUtility extends (0, platform_express_1.FileFieldsInterceptor)(uploadFields, {
        storage: (0, multer_1.memoryStorage)(),
    }) {
    };
}
//# sourceMappingURL=upload_file.interceptor.js.map