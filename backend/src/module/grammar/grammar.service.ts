import { Injectable } from '@nestjs/common';
import { CreateGrammarDto } from './dto/create-grammar.dto';
import { UpdateGrammarDto } from './dto/update-grammar.dto';

@Injectable()
export class GrammarService {
  create(createGrammarDto: CreateGrammarDto) {
    return 'This action adds a new grammar';
  }

  findAll() {
    return `This action returns all grammar`;
  }

  findOne(id: number) {
    return `This action returns a #${id} grammar`;
  }

  update(id: number, updateGrammarDto: UpdateGrammarDto) {
    return `This action updates a #${id} grammar`;
  }

  remove(id: number) {
    return `This action removes a #${id} grammar`;
  }
}
