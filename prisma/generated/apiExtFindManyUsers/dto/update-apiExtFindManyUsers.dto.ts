import { Prisma, type_user_id } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateApiExtFindManyUsersDto {
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  url?: string | null;
  @ApiProperty({
    type: () => Object,
    required: false,
    nullable: true,
  })
  headers?: Prisma.InputJsonValue | Prisma.NullableJsonNullValueInput;
  @ApiProperty({
    enum: type_user_id,
    required: false,
    nullable: true,
  })
  type_user_id?: type_user_id | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    required: false,
    nullable: true,
  })
  update_time?: Date | null;
}
