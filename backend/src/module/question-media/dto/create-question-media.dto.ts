import { AutoMap } from "@automapper/classes";
import { IsEnum, IsString } from "class-validator";
import { MEDIAS } from "src/utils/constants";

export class CreateQuestionMediaDto {
  @AutoMap()
  @IsEnum(MEDIAS)
  mediaType: MEDIAS;
  @AutoMap()
  @IsString()
  url: string;
}
