import { ApiProperty } from '@nestjs/swagger';
import { ConversationEntity } from '../../conversation/entities/conversation.entity';
import { UserEntity } from '../../user/entities/user.entity';

export class ConversationMemberEntity {
  @ApiProperty({
    type: 'string',
  })
  id: string;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  conversation_id: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  user_id: string | null;
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
  @ApiProperty({
    type: () => UserEntity,
    required: false,
    nullable: true,
  })
  user?: UserEntity | null;
}
