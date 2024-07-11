import { ApiProperty } from '@nestjs/swagger';

export class ConnectConversationMemberDto {
  @ApiProperty({
    type: 'string',
  })
  id: string;
}
