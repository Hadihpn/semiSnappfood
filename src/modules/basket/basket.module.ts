import { Module } from '@nestjs/common';
import { BasketService } from './basket.service';
import { BasketController } from './basket.controller';
import { AuthModule } from '../auth/auth.module';
import { MenuModule } from '../menu/menu.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserBasketEntity } from './entities/basket.entity';
import { DiscountEntity } from '../discount/entities/dicount.entity';
import { DiscountService } from '../discount/dicount.service';

@Module({
  imports: [
    AuthModule,
    MenuModule,
    TypeOrmModule.forFeature([UserBasketEntity, DiscountEntity]),
  ],
  controllers: [BasketController],
  providers: [BasketService,DiscountService],
})
export class BasketModule {}
