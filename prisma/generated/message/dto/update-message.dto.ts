import { Prisma, massage_type } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateMessageDto {
  @ApiProperty({
    type: 'string',
    required: false,
  })
  sender_id?: string;
  @ApiProperty({
    enum: massage_type,
    required: false,
    nullable: true,
  })
  type?: massage_type | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  message?: string | null;
  @ApiProperty({
    type: () => Object,
    required: false,
    nullable: true,
  })
  user_read?: Prisma.InputJsonValue | Prisma.NullableJsonNullValueInput;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    required: false,
    nullable: true,
  })
  update_time?: Date | null;
}
