import { Module } from '@nestjs/common';
import { MenuService } from './service/menu.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackEntity } from './entities/feedback.entity';
import { MenuEntity } from './entities/menu.entity';
import { TypeEntity } from './entities/type.entity';
import { MenuController } from './controllers/menu.controller';
import { FeedbackController } from './controllers/feedback.controller';
import { MenuTypeController } from './controllers/type.controller';
import { MenuTypeService } from './service/type.service';
import { AuthModule } from '../auth/auth.module';
import { S3Services } from '../s3/s3.services';

@Module({
  imports:[TypeOrmModule.forFeature([FeedbackEntity,MenuEntity,TypeEntity]),AuthModule],
  controllers: [MenuController,FeedbackController,MenuTypeController],
  providers: [MenuService,MenuTypeService,S3Services],
})
export class MenuModule {}
