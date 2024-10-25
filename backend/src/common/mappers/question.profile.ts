import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, type Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { Question } from 'src/module/question/entities/question.entity';
import { CreateQuestionDto } from 'src/module/question/dto/create-question.dto';
import { CreateAnswerDto } from 'src/module/answer/dto/create-answer.dto';
import { Answer } from 'src/module/answer/entities/answer.entity';
import { CreateQuestionMediaDto } from 'src/module/question-media/dto/create-question-media.dto';
import { QuestionMedia } from 'src/module/question-media/entities/question-media.entity';

@Injectable()
export class QuestionProfile extends AutomapperProfile {
    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    override get profile() {
        return (mapper) => {
            createMap(mapper, Question, CreateQuestionDto);
            createMap(mapper, CreateQuestionDto, Question);
            createMap(mapper, Array<CreateAnswerDto>, Array<Answer>);
            createMap(mapper, Array<CreateQuestionMediaDto>, Array<QuestionMedia>)
        };
    }
}