import {ApiProperty} from "@nestjs/swagger";

export class Hashtag {
  @ApiProperty({
    description: '태그',
  })
  title: string;
}
