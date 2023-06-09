import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { CourseEntity } from 'src/Domain/entities';
import { CourseDelegate } from '../../Application';
import { CourseInfrastructureService } from '../service';
import { UpdateCourseDto } from '../utils';
import { RegisterCourseDto } from '../utils/DTO/RegisterCourse.dto';

@ApiTags('course')
@Controller('Course')
export class CourseController {
  private readonly useCase: CourseDelegate;

  constructor(private readonly CourseService: CourseInfrastructureService) {
    this.useCase = new CourseDelegate(this.CourseService);
  }

  @Get('getByName/:id')
  getRouteName(@Param('id') id: string): Observable<CourseEntity> {
    this.useCase.toGetCourseByName();
    return this.useCase.execute(id);
  }
  @ApiOperation({ summary: 'create  course' })
  @Post()
  createCourse(@Body() Course: RegisterCourseDto): Observable<CourseEntity> {
    this.useCase.toCreateCourse();

    return this.useCase.execute(Course);
  }
  @ApiOperation({ summary: 'update  course' })
  @Put(':id')
  updateCourse(
    @Param('id') id: string,
    @Body() Course: UpdateCourseDto,
  ): Observable<CourseEntity> {
    this.useCase.updateCourse();
    return this.useCase.execute(id, Course);
  }
  @ApiOperation({ summary: 'delete  course' })
  @Delete(':id')
  deleteCourse(@Param('id') id: string): Observable<boolean> {
    this.useCase.toDeleteCourse();
    return this.useCase.execute(id);
  }
  @ApiOperation({ summary: 'get one   course' })
  @Get(':id')
  getCourse(@Param('id') id: string): Observable<CourseEntity> {
    this.useCase.findById();
    return this.useCase.execute(id);
  }
  @ApiOperation({ summary: 'get all course' })
  @Get()
  getAllCourses(): Observable<CourseEntity[]> {
    this.useCase.getAllCourse();
    return this.useCase.execute();
  }
}
