import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateCourseReviewingDto {
  @AutoMap()
  @ApiProperty({ 
    description: 'Content of the review',
    type: String,
    required: true,
    example: 'This course is amazing!',
  })
  @IsString()
  content: string;

  @AutoMap()
  @ApiProperty({ 
    description: 'Rating of the course',
    type: Number,
    required: true,
    example: 5,
  })
  @IsNumber()
  rating: number;

  @AutoMap()
  @ApiProperty({ 
    description: 'Current progress of the course',
    type: Number,
    required: true,
    example: 50,
  })
  @IsNumber()
  currentProgress: number;

  @AutoMap()
  @ApiProperty({ 
    description: 'Course ID',
    type: String,
    required: true,
    example: '1',
  })
  @IsString()
  courseId: string;
   
  @AutoMap()
  @ApiProperty({ 
    description: 'Student ID',
    type: String,
    required: true,
    example: '1',
  })
  @IsString()
  studentId: string;
}
