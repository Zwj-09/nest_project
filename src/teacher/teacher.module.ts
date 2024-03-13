import {
  // Global,
  Module,
  // BeforeApplicationShutdown,
  // OnApplicationBootstrap,
  // OnApplicationShutdown,
  // OnModuleDestroy,
  // OnModuleInit,
} from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { ModuleRef } from '@nestjs/core';

// 全局 Module( 尽量少用 会分不清是哪里传来的 )
// @Global()
@Module({
  controllers: [TeacherController],
  providers: [TeacherService],
  exports: [TeacherService],
})
// implements
//   OnModuleInit,
//   OnApplicationBootstrap,
//   OnModuleDestroy,
//   BeforeApplicationShutdown,
//   OnApplicationShutdown
export class TeacherModule {
  constructor(private moduleRef: ModuleRef) {}

  // onModuleInit() {
  //   console.log('module OnModuleInit');
  // }
  // onApplicationBootstrap() {
  //   console.log('module OnApplicationBootstrap');
  // }

  // onModuleDestroy() {
  //   console.log('module onModuleDestroy');
  // }
  // beforeApplicationShutdown(singal: string) {
  //   console.log('module beforeApplicationShutdown', singal);
  // }
  // onApplicationShutdown() {
  //   console.log('module onApplicationShutdown');
  // }
}
