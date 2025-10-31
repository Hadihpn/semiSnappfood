import { Module } from '@nestjs/common';
import { DiscountService } from './dicount.service';
import { DiscountController } from './dicount.controller';

@Module({
  controllers: [DiscountController],
  providers: [DiscountService],
})
export class DiscountModule {}
