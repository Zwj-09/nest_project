import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // 构造器注入
  // constructor(private readonly appService: AppService) {}
  // ==================================================================
  // // 属性注入
  // @Inject(AppService)
  // private readonly appService: AppService;
  // ==================================================================
  // provide 自定义 字符串 token 需要手动注入
  constructor(
    private readonly appService: AppService, // 用类名 当 token 可以不用 @Inject
    // @Inject('app-service') private readonly appService: AppService,
    @Inject('person') private readonly person: { name: string; age: number },
    @Inject('student') private readonly student: { name: string; desc: string },
  ) {}
  // ==================================================================

  @Get()
  getHello(): string {
    // console.log('person', this.person);
    // console.log('student', this.student);
    return this.appService.getHello();
  }
}
