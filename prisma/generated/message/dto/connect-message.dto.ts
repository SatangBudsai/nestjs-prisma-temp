import { ApiProperty } from '@nestjs/swagger';

export class ConnectMessageDto {
  @ApiProperty({
    type: 'string',
  })
  id: string;
}
