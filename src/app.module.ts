import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/typeorm.config';
import { UserModule } from './modules/user/user.module';
import { CategoryModule } from './modules/category/category.module';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { AuthModule } from './modules/auth/auth.module';
import { SupplierModule } from './modules/supplier/supplier.module';
import { MenuModule } from './modules/menu/menu.module';
import { BasketModule } from './modules/basket/basket.module';
import { DicountModule } from './modules/dicount/dicount.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: join(process.cwd(), '.env'),
    }),
    TypeOrmModule.forRoot(TypeOrmConfig()),
    UserModule,
    CategoryModule,
    AuthModule,
    SupplierModule,
    MenuModule,
    BasketModule,
    DicountModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
