import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class DiscountDto {
  @ApiProperty()
  code: string;
  @ApiPropertyOptional()
  percent: number;
  @ApiPropertyOptional()
  amount: number;
  @ApiPropertyOptional()
  starts_in: number;
  @ApiPropertyOptional()
  expires_in: number;
  @ApiPropertyOptional()
  limit: number;
}