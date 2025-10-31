import { PartialType } from '@nestjs/swagger';
import { CreateDicountDto } from './create-dicount.dto';

export class UpdateDicountDto extends PartialType(CreateDicountDto) {}
