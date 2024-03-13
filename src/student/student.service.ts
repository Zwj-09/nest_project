import { Injectable } from '@nestjs/common';
import { TeacherService } from 'src/teacher/teacher.service';

@Injectable()
export class StudentService {
  constructor(private readonly teacherService: TeacherService) {}

  findAll() {
    console.log('teacherService', this.teacherService.findAll());

    return `This action returns all student`;
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
