import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { DocService } from '../services/doc.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('doc')
@Controller('doc')
export class DocController {
  constructor(private readonly appService: DocService) {}
}
