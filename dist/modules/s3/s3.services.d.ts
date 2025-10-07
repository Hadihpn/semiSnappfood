import { S3 } from 'aws-sdk';
export declare class S3Services {
    private readonly s3;
    constructor();
    uploadFile(file: Express.Multer.File, folderName: string): Promise<S3.ManagedUpload.SendData>;
    deleteFile(Key: string): Promise<import("aws-sdk/lib/request").PromiseResult<S3.DeleteObjectOutput, import("aws-sdk").AWSError>>;
}
