import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsMobilePhone } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
   @IsMobilePhone("fa-IR", {}, {message: "mobile number is invalid"})
   mobile: string;
   @ApiProperty()
   otp_code: string;
   @ApiProperty()
   otp_expires_in: Date;
}
