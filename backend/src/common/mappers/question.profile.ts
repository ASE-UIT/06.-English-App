import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, type Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { Question } from 'src/module/question/entities/question.entity';
import { CreateQuestionDto } from 'src/module/question/dto/create-question.dto';
import { CreateAnswerDto } from 'src/module/answer/dto/create-answer.dto';
import { Answer } from 'src/module/answer/entities/answer.entity';
import { UpdateAnswerDto } from 'src/module/answer/dto/update-answer.dto';
import { UpdateQuestionDto } from 'src/module/question/dto/update-question.dto';
import { QuestionGroup } from 'src/module/question-group/entities/question-group.entity';
import { CreateQuestionGroupDto } from 'src/module/question-group/dto/create-question-group.dto';
import { UpdateQuestionGroupDto } from 'src/module/question-group/dto/update-question-group.dto';

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
            createMap(mapper, UpdateQuestionDto, Question);
            createMap(mapper, Array<UpdateAnswerDto>, Array<Answer>);
            createMap(mapper, CreateQuestionGroupDto, QuestionGroup);
            createMap(mapper, UpdateQuestionGroupDto, QuestionGroup);
            createMap(mapper, QuestionGroup, CreateQuestionGroupDto);
            createMap(mapper, QuestionGroup, UpdateQuestionGroupDto);
        };
    }
}