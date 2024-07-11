import { conversation_type } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateConversationDto {
  @ApiProperty({
    enum: conversation_type,
    required: false,
    nullable: true,
  })
  type?: conversation_type | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    required: false,
    nullable: true,
  })
  update_time?: Date | null;
}
