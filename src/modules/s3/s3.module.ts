import { Module } from "@nestjs/common";
import { S3Services } from "./s3.services";

@Module({
  providers: [S3Services],
  exports: [S3Services],
})
export class S3Module {}
