import {
  Controller,
  Get,
  Param,
  Delete,
  // OnModuleInit,
  // OnApplicationBootstrap,
  // OnModuleDestroy,
  // BeforeApplicationShutdown,
  // OnApplicationShutdown,
} from '@nestjs/common';
import { TeacherService } from './teacher.service';

@Controller('teacher')
// implements
//   OnModuleInit,
//   OnApplicationBootstrap,
//   OnModuleDestroy,
//   BeforeApplicationShutdown,
//   OnApplicationShutdown
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  // onModuleInit() {
  //   console.log('controller OnModuleInit');
  // }
  // onApplicationBootstrap() {
  //   console.log('controller OnApplicationBootstrap');
  // }

  // onModuleDestroy() {
  //   console.log('controller onModuleDestroy');
  // }
  // beforeApplicationShutdown(singal: string) {
  //   console.log('controller beforeApplicationShutdown', singal);
  // }
  // onApplicationShutdown() {
  //   console.log('controller onApplicationShutdown');
  // }

  @Get()
  findAll() {
    return this.teacherService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacherService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherService.remove(+id);
  }
}
