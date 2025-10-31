import { Injectable } from '@nestjs/common';
import { CreateDicountDto } from './dto/create-dicount.dto';
import { UpdateDicountDto } from './dto/update-dicount.dto';

@Injectable()
export class DicountService {
  create(createDicountDto: CreateDicountDto) {
    return 'This action adds a new dicount';
  }

  findAll() {
    return `This action returns all dicount`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dicount`;
  }

  update(id: number, updateDicountDto: UpdateDicountDto) {
    return `This action updates a #${id} dicount`;
  }

  remove(id: number) {
    return `This action removes a #${id} dicount`;
  }
}
