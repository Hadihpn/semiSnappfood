import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerConfigInit } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  SwaggerConfigInit(app)
  await app.listen(process.env.PORT ?? 3000,()=>{
    console.log(`connected`)
    console.log(`swaager : http://127.0.0.1:3000/swagger`)
  });
}
bootstrap();
