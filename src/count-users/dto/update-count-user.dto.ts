import { PartialType } from '@nestjs/mapped-types';
import { CreateCountUserDto } from './create-count-user.dto';

export class UpdateCountUserDto extends PartialType(CreateCountUserDto) {}
