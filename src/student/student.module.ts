import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TeacherModule } from 'src/teacher/teacher.module';

@Module({
  imports: [TeacherModule],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
