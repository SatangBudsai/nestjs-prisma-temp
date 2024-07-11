import { ApiProperty } from '@nestjs/swagger';

export class ConnectApplicationDto {
  @ApiProperty({
    type: 'string',
  })
  id: string;
}
