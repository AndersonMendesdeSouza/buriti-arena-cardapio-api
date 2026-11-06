import { Module } from '@nestjs/common';
import { AccessController } from './count-users.controller';
import { AccessService } from './count-users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Access } from './entities/count-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Access])],
  controllers: [AccessController],
  providers: [AccessService],
})
export class AccessModule { }
