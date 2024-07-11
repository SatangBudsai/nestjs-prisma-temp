import { ApiProperty } from '@nestjs/swagger';

export class CreateConversationMemberDto {
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    required: false,
    nullable: true,
  })
  update_time?: Date | null;
}
