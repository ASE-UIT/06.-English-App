import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString } from "class-validator";

export class CreateAnswerDto {
  @AutoMap()
  @ApiProperty({ description: "Answer text" })
  @IsString()
  text: string;

  @AutoMap()
  @ApiProperty({ description: "Is correct answer" })
  @IsBoolean()
  is_correct: boolean;
}
