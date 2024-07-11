import { ApiProperty } from '@nestjs/swagger';

export class ConnectApiExtFindManyUsersDto {
  @ApiProperty({
    type: 'string',
  })
  id: string;
}
