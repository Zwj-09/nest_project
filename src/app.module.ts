import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [TeacherModule, StudentModule],
  controllers: [AppController],
  // providers: [AppService], // 简写

  // 完整写法
  providers: [
    {
      // 指定 token ( 类名当做 token )
      provide: AppService,
      // 指定 token ( 自定义字符串token )
      // provide: 'app-service',
      useClass: AppService, // 指定对象的类
    },

    // 指定值
    {
      provide: 'person',
      useValue: {
        name: 'aaa',
        age: 24,
      },
    },

    // 动态注入 useFactory
    {
      provide: 'student',
      useFactory(person: { name: string }, appService: AppService) {
        return {
          name: person.name,
          desc: appService.getHello(),
        };
      },

      // 使用 token 来注入
      inject: ['person', AppService],
    },
  ],
})
export class AppModule {}
