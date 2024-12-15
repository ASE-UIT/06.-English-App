import { AutoMap } from '@automapper/classes';
import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RefreshTokenDto {
  @AutoMap()
  @IsOptional()
  @ApiProperty({ description: 'Only mobile device use parameter' })
  refreshToken: string;
}
