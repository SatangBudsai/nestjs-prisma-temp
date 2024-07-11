import { ApiProperty } from '@nestjs/swagger';
import { ApiExtFindManyUsersEntity } from '../../apiExtFindManyUsers/entities/apiExtFindManyUsers.entity';
import { ConversationEntity } from '../../conversation/entities/conversation.entity';
import { UserEntity } from '../../user/entities/user.entity';

export class ApplicationEntity {
  @ApiProperty({
    type: 'string',
  })
  id: string;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  domain: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  name: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  logo: string | null;
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
    type: () => ApiExtFindManyUsersEntity,
    isArray: true,
    required: false,
  })
  api_ext_find_many_users?: ApiExtFindManyUsersEntity[];
  @ApiProperty({
    type: () => ConversationEntity,
    isArray: true,
    required: false,
  })
  conversation?: ConversationEntity[];
  @ApiProperty({
    type: () => UserEntity,
    isArray: true,
    required: false,
  })
  user?: UserEntity[];
}
