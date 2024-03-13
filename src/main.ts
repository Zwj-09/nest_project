import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { NextFunction } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 全局中间件
  // app.use((req: Request, res: Response, next: NextFunction) => {
  //   console.log('before', req.url);
  //   next();
  //   console.log('after');
  // });

  // setTimeout(() => {
  //   app.close();
  // }, 3000);
  await app.listen(3000);
}
bootstrap();
