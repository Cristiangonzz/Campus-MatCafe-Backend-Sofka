import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsMongoId,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';
import { CourseEntity } from 'src/Domain/entities';

export class RegisterCourseDto implements CourseEntity {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @Matches(/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s\d.,]+$/)
  @ApiProperty()
  title: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @Matches(/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s\d.,]+$/)
  @ApiProperty()
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @Matches(/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s\d.,]+$/)
  @MinLength(5)
  duration: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @MinLength(5)
  @Matches(/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s\d.,]+$/)
  requirements: string;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  content: string[];

  @IsString()
  @IsNotEmpty()
  @IsMongoId()
  @ApiProperty()
  adminId: string;
}
