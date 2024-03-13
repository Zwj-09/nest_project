import {
  Injectable,
  // BeforeApplicationShutdown,
  // OnApplicationBootstrap,
  // OnApplicationShutdown,
  // OnModuleDestroy,
  // OnModuleInit,
} from '@nestjs/common';

@Injectable()
// implements
//   OnModuleInit,
//   OnApplicationBootstrap,
//   OnModuleDestroy,
//   BeforeApplicationShutdown,
//   OnApplicationShutdown
export class TeacherService {
  // onModuleInit() {
  //   console.log('service OnModuleInit');
  // }
  // onApplicationBootstrap() {
  //   console.log('service OnApplicationBootstrap');
  // }

  // onModuleDestroy() {
  //   console.log('service onModuleDestroy');
  // }
  // beforeApplicationShutdown(singal: string) {
  //   console.log('service beforeApplicationShutdown', singal);
  // }
  // onApplicationShutdown() {
  //   console.log('service onApplicationShutdown');
  // }

  findAll() {
    return `This action returns all teacher`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teacher`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher`;
  }
}
