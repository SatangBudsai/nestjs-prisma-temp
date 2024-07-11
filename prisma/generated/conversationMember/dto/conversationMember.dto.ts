import { ApiProperty } from '@nestjs/swagger';

export class ConversationMemberDto {
  @ApiProperty({
    type: 'string',
  })
  id: string;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  created_time: Date;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    nullable: true,
  })
  update_time: Date | null;
}
