import { AutoMap } from "@automapper/classes";
import { IsBoolean, IsString } from "class-validator";

export class CreateAnswerDto {
  @AutoMap()
  @IsString()
  text: string;

  @AutoMap()
  @IsBoolean()
  is_correct: boolean;
}
