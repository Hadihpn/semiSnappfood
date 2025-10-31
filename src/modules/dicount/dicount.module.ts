import { Module } from '@nestjs/common';
import { DicountService } from './dicount.service';
import { DicountController } from './dicount.controller';

@Module({
  controllers: [DicountController],
  providers: [DicountService],
})
export class DicountModule {}
