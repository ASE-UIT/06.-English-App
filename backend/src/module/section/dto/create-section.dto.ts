import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsDefined, IsEnum, IsNotEmpty, IsNotEmptyObject, IsObject, IsString, ValidateNested } from 'class-validator';
import { IsQuestionGroupOrQuestion } from 'src/common/validators/is-questionGroup-or-question.validator';
import { CreateQuestionDto } from 'src/module/question/dto/create-question.dto';
import { SECTION_TYPE } from 'src/utils/constants';

export class SectionQuestionDto {
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Question group text',
    type: String,
  })
  text: string;

  @ApiProperty({
    description: 'Questions of the section',
    type: [CreateQuestionDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateQuestionDto)
  questions: CreateQuestionDto[];
}

export class CreateSectionDto {
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Lesson Id of the section',
    type: String,
  })
  lessonId: string;
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Title of the section',
    type: String,
  })
  title: string;
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Content of the section',
    type: String,
  })
  content: string;
  @ApiProperty()
  @IsEnum(SECTION_TYPE)
  @IsNotEmpty()
  @AutoMap()
  @ApiProperty({
    description: 'Type of the section',
    enum: SECTION_TYPE,
  })
  type: SECTION_TYPE;
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Media of the section',
    type: String,
  })
  sectionMedia: string;

  @ApiProperty({
    description: 'Questions of the section',
    type: [SectionQuestionDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @IsQuestionGroupOrQuestion()
  // @Type((options) => {
  //   const value = options.object[options.property];
  //   console.log('Inspecting Value for Type Mapping:', value);
  //   if (Array.isArray(value)) {
  //     const isSection = value.some((item) => 'questions' in item);
  //     console.log('Determined Type:', isSection ? 'SectionQuestionDto' : 'CreateQuestionDto');
  //     return isSection ? SectionQuestionDto : CreateQuestionDto;
  //   }
  //   return CreateQuestionDto;
  // })
  @Type((options) => {
    const value = options.object[options.property];
    // console.log('Inspecting Value for Type Mapping:', value);
    if (Array.isArray(value)) {
      const isSection = value.some((item) => 'questions' in item);
      // console.log('Determined Type:', isSection ? 'SectionQuestionDto' : 'CreateQuestionDto');
    }
    return value 
      && Array.isArray(value) 
      && value.some(item => item.questions) 
      ? SectionQuestionDto : CreateQuestionDto;
  })
  sectionQuestion: (SectionQuestionDto | CreateQuestionDto)[];
}



// Example JSON

// {
//   "lessonId": "lesson-uuid",
//   "title": "section title",
//   "content": "section content",
//   "type": "READING",
//   "sectionMedia": "https://url-to-media.example",
//   "sectionQuestion": [
//     {
//       "questionGroupText": "question group text 1 (title)",
//       "questions": [
//         {
//           "text": "Are you a chill guy?",
//           "type": "MULTIPLECHOICE",
//           "order": 1,
//           "answers": [
//             {
//               "text": "YES",
//               "isCorrect": true
//             },
//             {
//               "text": "NO",
//               "isCorrect": false
//             }
//           ]
//         },
//         {
//           "text": "Are you gay?",
//           "type": "MULTIPLECHOICE",
//           "order": 2,
//           "answers": [
//             {
//               "text": "YES",
//               "isCorrect": true
//             },
//             {
//               "text": "NO",
//               "isCorrect": false
//             }
//           ]
//         }
//       ]
//     }, 
//     {
//       "questionGroupText": "question group text 2 (title)",
//       "questions": [
//         {
//           "text": "Are you a chill girl?",
//           "type": "MULTIPLECHOICE",
//           "order": 1,
//           "answers": [
//             {
//               "text": "YES",
//               "isCorrect": true
//             },
//             {
//               "text": "NO",
//               "isCorrect": false
//             }
//           ]
//         },
//         {
//           "text": "Are you lesbian?",
//           "type": "MULTIPLECHOICE",
//           "order": 2,
//           "answers": [
//             {
//               "text": "YES",
//               "isCorrect": true
//             },
//             {
//               "text": "NO",
//               "isCorrect": false
//             }
//           ]
//         }
//       ]
//     }
//   ]
// }