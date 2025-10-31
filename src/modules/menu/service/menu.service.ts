import { Inject, Injectable, NotFoundException, Scope } from '@nestjs/common';
import { FoodDto, UpdateFoodDto } from '../dto/food.dto';
import { REQUEST } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuEntity } from '../entities/menu.entity';
import { Repository } from 'typeorm';
import { TypeEntity } from '../entities/type.entity';
import { MenuTypeService } from './type.service';
import { S3Services } from 'src/modules/s3/s3.services';
import { error } from 'console';
import { Request } from 'express';
// import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable({ scope: Scope.REQUEST })
export class MenuService {
  constructor(
    @Inject(REQUEST) private req: Request,
    @InjectRepository(MenuEntity)
    private menuRepository: Repository<MenuEntity>,
    @InjectRepository(TypeEntity)
    private menuTypeRepository: Repository<TypeEntity>,
    private typeService: MenuTypeService,
    private s3Service: S3Services,
  ) {}
  async create(image: Express.Multer.File, foodDto: FoodDto) {
    const supplierId = this.req.user?.id;
    const { name, description, discount, price, typeId } = foodDto;
    const type = await this.typeService.findOneById(typeId);
    const { Location, Key } = await this.s3Service.uploadFile(
      image,
      'menu-item',
    );
    const item = this.menuRepository.create({
      name,
      description,
      discount,
      price,
      typeId: type.id,
      supplierId,
      image: Location,
      key: Key,
    });
    await this.menuRepository.save(item);
    return {
      message: 'create',
    };
  }
  async findAll(supplierId: number) {
    return await this.menuTypeRepository.find({
      where: { supplierId },
      relations: {
        items: true,
      },
    });
  }

  async findOne(id: number) {
    const supplierId = this.req.user?.id;
    const item = await this.menuRepository.findOne({
      where: { id, supplierId },
      relations: {
        type: true,
        feedbacks: {
          user: true,
        },
      },
      select: {
        type: {
          title: true,
        },
        feedbacks: {
          comment: true,
          created_at: true,
          user: {
            full_name: true,
          },
          score: true,
        },
      },
    });
    if (!item) throw new NotFoundException('menu not found');
    return item;
  }
  async checkExist(id: number) {
    const supplierId = this.req.user?.id;
    const item = await this.menuRepository.findOneBy({ id, supplierId });
    if (!item) throw new NotFoundException('menu not found');
    return item;
  }

  update(id: number, foodDto: UpdateFoodDto, image: Express.Multer.File) {
    return `This action updates a #${id} menu`;
  }

  async remove(id: number) {
    const item = await this.findOne(id);
    if (!item) throw new NotFoundException('menu not found');
    await this.menuRepository.delete(item);
    return `This action removes a menu successfully`;
  }
  async getOne(id: number) {
    const item = await this.menuRepository.findOne({
      where: { id },
    });
    if (!item) throw new NotFoundException('menu not found');
    return item;
  }
}
