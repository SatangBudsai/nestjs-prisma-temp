import { Injectable } from '@nestjs/common';
import { prisma } from '../config/prisma';

@Injectable()
export class DocService {
  constructor(private prisma: prisma) {}
}
