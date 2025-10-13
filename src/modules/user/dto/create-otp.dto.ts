import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateOtpDto {
  @ApiProperty()
  userId: number;
  @ApiProperty()
  code: string;
  @ApiProperty()
  expires_in: Date;
}
