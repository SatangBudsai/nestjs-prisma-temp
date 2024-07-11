import { Prisma, massage_type } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { ConversationEntity } from '../../conversation/entities/conversation.entity';

export class MessageEntity {
  @ApiProperty({
    type: 'string',
  })
  id: string;
  @ApiProperty({
    type: 'string',
  })
  sender_id: string;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  conversation_id: string | null;
  @ApiProperty({
    enum: massage_type,
    nullable: true,
  })
  type: massage_type | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  message: string | null;
  @ApiProperty({
    type: () => Object,
    nullable: true,
  })
  user_read: Prisma.JsonValue | null;
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
  @ApiProperty({
    type: () => ConversationEntity,
    required: false,
    nullable: true,
  })
  conversation?: ConversationEntity | null;
}
