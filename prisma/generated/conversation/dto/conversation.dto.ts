import { conversation_type } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ConversationDto {
  @ApiProperty({
    type: 'string',
  })
  id: string;
  @ApiProperty({
    enum: conversation_type,
    nullable: true,
  })
  type: conversation_type | null;
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
