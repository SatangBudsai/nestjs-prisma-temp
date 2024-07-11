import { ApiProperty } from '@nestjs/swagger';

export class UpdateConversationMemberDto {
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    required: false,
    nullable: true,
  })
  update_time?: Date | null;
}
