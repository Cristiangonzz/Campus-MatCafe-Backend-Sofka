import {
  IsArray,
  IsMongoId,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { RouteEntity } from 'src/Domain/entities';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterRouteDto implements RouteEntity {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  title: string;
  @IsString()
  @MinLength(5)
  @IsNotEmpty()
  @ApiProperty()
  description: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  duration: string;
  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  courses: string[];
  @IsString()
  @IsNotEmpty()
  @IsMongoId()
  @ApiProperty()
  adminId: string;
}
