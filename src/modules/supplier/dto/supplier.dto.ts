import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsIdentityCard,
  IsMobilePhone,
  Length,
} from 'class-validator';

export class CreateSupplierDto {
  @ApiProperty()
  categoryId: number;
  @ApiProperty()
  @Length(3, 50)
  store_name: string;
  @ApiProperty()
  city: string;
  @ApiProperty()
  @Length(3, 50)
  manager_name: string;
  @ApiProperty()
  @Length(3, 50)
  manager_family: string;
  @ApiProperty()
  @IsMobilePhone('fa-IR', {}, { message: 'mobile number is invalid' })
  mobile: string;
  @ApiProperty()
  invite_code: string;
  @ApiProperty()
  otp_code: string;
  @ApiProperty()
  otp_expires_in: Date;
}

export class SupplementaryInformationDto {
  @ApiProperty()
  @IsIdentityCard('IR')
  national_code: string;
  @ApiProperty()
  @IsEmail()
  email: string;
}
export class UploadDocsDto {
  @ApiProperty({ format: 'binary' })
  acceptedDoc: string;
  @ApiProperty({ format: 'binary' })
  image: string;
}
