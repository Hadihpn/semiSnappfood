import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { extname } from 'path';

@Injectable()
export class S3Services {
  private readonly s3: S3;
  constructor() {
    this.s3 = new S3({
      credentials: {
        // accessKeyId: process.env.S3_ACCESS_KEY,
        accessKeyId: "eh6qg50op0ii1h52",
        // secretAccessKey: process.env.S3_SECRET_KEY,
        secretAccessKey: "d51b2300-5591-478f-8a4d-508ab883ea84",
      },
      region: 'default',
      endpoint: "storage.c2.liara.space",
    });
  }

  async uploadFile(file: Express.Multer.File, folderName: string) {
    // const client = new S3Client({
    //     region:"default",
    //     endpoint:process.env.S3_ENDPOINT_NAME,
    //     credentials:{
    //         accessKeyId:"eh6qg50op0ii1h52",
    //         secretAccessKey:"d51b2300-5591-478f-8a4d-508ab883ea84"
    //     }
    // })
    const ext = extname(file.originalname);
    //   const params = {
    //     Body:  file.buffer,
    //     Bucket: "storage.c2.liara.space",
    //     Key: `${folderName}/${Date.now()}${ext}`,
    // };

    return await this.s3
      .upload({
        // Bucket:process.env.S3_BUCKET_NAME,
        Bucket: 'mysnappfood',
        Key: `${folderName}/${Date.now()}${ext}`,
        Body: file.buffer,
      })
      .promise();
    // return await client.send(new PutObjectCommand(params));
  }
  async deleteFile(Key: string) {
    return await this.s3
      .deleteObject({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: decodeURI(Key),
      })
      .promise();
  }
}
