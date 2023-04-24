import { Module } from '@nestjs/common';
import { RouteController } from './Infrastructure/controllers/routeController';

import { APP_FILTER } from '@nestjs/core';
import { InfrastructureModule } from './Infrastructure';
import { AdminController } from './Infrastructure/controllers/admin.controller';
import { CourseController } from './Infrastructure/controllers/courseController';
import { MongoServerErrorExceptionFilter } from './Infrastructure/utils/exception-filters';
import { LearnerController } from './Infrastructure/controllers/learner.controller';

@Module({
  imports: [InfrastructureModule],
  controllers: [
    AdminController,
    RouteController,
    CourseController,
    LearnerController,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: MongoServerErrorExceptionFilter,
    },
  ],
})
export class AppModule {}
