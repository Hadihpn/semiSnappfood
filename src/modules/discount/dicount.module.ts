import { Module } from '@nestjs/common';
import { DiscountService } from './dicount.service';
import { DiscountController } from './dicount.controller';
import { DiscountEntity } from './entities/dicount.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
   imports: [TypeOrmModule.forFeature([DiscountEntity])],
  providers: [DiscountService],
  controllers: [DiscountController],
  exports: [],
})
export class DiscountModule {}
