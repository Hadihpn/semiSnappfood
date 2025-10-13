import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateSupllierOtpDto {
  @ApiProperty()
  supplierId: number;
  @ApiProperty()
  code: string;
  @ApiProperty()
  expires_in: Date;
}
