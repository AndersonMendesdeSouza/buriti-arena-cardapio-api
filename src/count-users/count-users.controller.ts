import {
  Controller,
  Post,
  Get,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { AccessService } from './count-users.service';

@Controller('access')
export class AccessController {
  constructor(
    private readonly service: AccessService,
  ) {}

  @Post()
  create(@Body('visitorId') visitorId: string) {
    return this.service.create(visitorId);
  }

  @Get('count')
  count() {
    return this.service.count();
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}