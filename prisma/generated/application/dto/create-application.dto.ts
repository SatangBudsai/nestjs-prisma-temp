import { ApiProperty } from '@nestjs/swagger';

export class CreateApplicationDto {
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  domain?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  name?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  logo?: string | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    required: false,
    nullable: true,
  })
  update_time?: Date | null;
}
