import { ApiProperty } from '@nestjs/swagger';
import { ConversationMemberEntity } from '../../conversationMember/entities/conversationMember.entity';
import { ApplicationEntity } from '../../application/entities/application.entity';

export class UserEntity {
  @ApiProperty({
    type: 'string',
  })
  id: string;
  @ApiProperty({
    type: 'string',
  })
  app_id: string;
  @ApiProperty({
    type: 'string',
  })
  user_key: string;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  name: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  profile: string | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    nullable: true,
  })
  created_time: Date | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    nullable: true,
  })
  update_time: Date | null;
  @ApiProperty({
    type: () => ConversationMemberEntity,
    isArray: true,
    required: false,
  })
  conversation_member?: ConversationMemberEntity[];
  @ApiProperty({
    type: () => ApplicationEntity,
    required: false,
  })
  application?: ApplicationEntity;
}
