import { Inject, Injectable, NotFoundException, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeEntity } from '../entities/type.entity';
import { Repository } from 'typeorm';
import { Request } from 'express';
import { REQUEST } from '@nestjs/core';
import { MenuTypeDto } from '../dto/menu-type.dto';

@Injectable({ scope: Scope.REQUEST })
export class MenuTypeService {
  constructor(
    @InjectRepository(TypeEntity)
    private typeRepository: Repository<TypeEntity>,
    @Inject(REQUEST) private req: Request,
  ) {}
  async create(createDto: MenuTypeDto) {
    //add supplier
    const id = this.req.user?.id;
    if (!id || isNaN(id)) throw new NotFoundException('cannot find supplier');
    const type = await this.typeRepository.create({
      title: createDto.title,
      supplierId: id,
    });
    await this.typeRepository.save(type);
    return {
      message: 'type created successfully',
    };
  }
  async findAll() {
    const supplierId = this.req.user?.id;
    if (!supplierId || isNaN(supplierId)) throw new NotFoundException('cannot find supplier');
    return await this.typeRepository.findAndCount({
      where: {supplierId},
      order: { id: 'DESC' },
    });
  }
  async findOneById(id: number) {
    const supplierId = this.req.user?.id;
    if (!supplierId || isNaN(supplierId)) throw new NotFoundException('cannot find supplier');
    const type = await this.typeRepository.findOneBy({ id ,supplierId});
    if (!type) throw new NotFoundException('cannot find any type');
    return type;
  }
  async delete(id: number) {
    const type = await this.typeRepository.findOneBy({ id });
    if (!type) throw new NotFoundException('cannot find any type');
    await this.typeRepository.delete(type);
    return {
      message: 'the type deleted successfully',
    };
  }
  async update(id: number, menuTypeDto: MenuTypeDto) {
    let type =  await this.findOneById(id);
    const {title, priority} = menuTypeDto;
    if (title) type.title = title;
    if (priority) type.priority = priority;
     await this.typeRepository.save(type);
    return {
      message: 'type updated successfully',
    };
  }
}
