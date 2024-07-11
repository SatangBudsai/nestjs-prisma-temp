import { conversation_type } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { ApplicationEntity } from '../../application/entities/application.entity';
import { ConversationMemberEntity } from '../../conversationMember/entities/conversationMember.entity';
import { MessageEntity } from '../../message/entities/message.entity';

export class ConversationEntity {
  @ApiProperty({
    type: 'string',
  })
  id: string;
  @ApiProperty({
    type: 'string',
  })
  app_id: string;
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
  @ApiProperty({
    type: () => ApplicationEntity,
    required: false,
  })
  application?: ApplicationEntity;
  @ApiProperty({
    type: () => ConversationMemberEntity,
    isArray: true,
    required: false,
  })
  conversation_member?: ConversationMemberEntity[];
  @ApiProperty({
    type: () => MessageEntity,
    isArray: true,
    required: false,
  })
  message?: MessageEntity[];
}
