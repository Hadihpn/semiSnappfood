"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Services = void 0;
const common_1 = require("@nestjs/common");
const aws_sdk_1 = require("aws-sdk");
const path_1 = require("path");
let S3Services = class S3Services {
    s3;
    constructor() {
        this.s3 = new aws_sdk_1.S3({
            credentials: {
                accessKeyId: "eh6qg50op0ii1h52",
                secretAccessKey: "d51b2300-5591-478f-8a4d-508ab883ea84",
            },
            region: 'default',
            endpoint: "storage.c2.liara.space",
        });
    }
    async uploadFile(file, folderName) {
        const ext = (0, path_1.extname)(file.originalname);
        return await this.s3
            .upload({
            Bucket: 'mysnappfood',
            Key: `${folderName}/${Date.now()}${ext}`,
            Body: file.buffer,
        })
            .promise();
    }
    async deleteFile(Key) {
        return await this.s3
            .deleteObject({
            Bucket: process.env.S3_BUCKET_NAME,
            Key: decodeURI(Key),
        })
            .promise();
    }
};
exports.S3Services = S3Services;
exports.S3Services = S3Services = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], S3Services);
//# sourceMappingURL=s3.services.js.map