import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: '아이디',
  })
  @IsString()
  id: string;

  @ApiProperty({
    description: '닉네임',
  })
  @IsString()
  nickname: string;

  @ApiProperty({
    description: '비밀번호',
  })
  @IsString()
  password: string;
}
