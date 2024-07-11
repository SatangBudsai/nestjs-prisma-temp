import { Prisma, type_user_id } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { ApplicationEntity } from '../../application/entities/application.entity';

export class ApiExtFindManyUsersEntity {
  @ApiProperty({
    type: 'string',
  })
  id: string;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  app_id: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  url: string | null;
  @ApiProperty({
    type: () => Object,
    nullable: true,
  })
  headers: Prisma.JsonValue | null;
  @ApiProperty({
    enum: type_user_id,
    nullable: true,
  })
  type_user_id: type_user_id | null;
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
    type: () => ApplicationEntity,
    required: false,
    nullable: true,
  })
  application?: ApplicationEntity | null;
}
