import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LogMiddleWare implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log('before2', req.url);
    next();
    console.log('after2');
  }
}
