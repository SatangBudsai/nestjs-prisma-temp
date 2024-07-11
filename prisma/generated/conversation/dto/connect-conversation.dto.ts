import { ApiProperty } from '@nestjs/swagger';

export class ConnectConversationDto {
  @ApiProperty({
    type: 'string',
  })
  id: string;
}
