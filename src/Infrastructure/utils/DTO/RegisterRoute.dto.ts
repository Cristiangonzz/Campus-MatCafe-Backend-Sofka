import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { ICourse } from '../../../Domain';
import { RouteEntity } from '../../../Domain/entities/route.entity';

export class RegisterRouteDto implements RouteEntity {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsString()
  @IsNotEmpty()
  duration: string;
  @IsArray()
  @IsNotEmpty()
  courses: ICourse[];
  @IsString()
  @IsNotEmpty()
  adminId: string;
}
