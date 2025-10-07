import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './entities/category.entity';
import { Repository } from 'typeorm';
import { S3Services } from '../s3/s3.services';
import { isBoolean, toBoolean } from 'src/utility/function.utils';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { paginationGenerator, paginationSolver } from 'src/common/utility/pagination.util';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
    private s3: S3Services,
  ) {}
  async create(
    createCategoryDto: CreateCategoryDto,
    image: Express.Multer.File,
  ) {
    let { title, slug, show, parentId } = createCategoryDto;
    if(slug){
      const category = await this.findOneBySlug(slug);
      if(category){
        throw new ConflictException("category already existed")
      }
    }
    const { Location } = await this.s3.uploadFile(
      image,
      'snappfood-category-image',
    );

    if (isBoolean(show)) {
      show = toBoolean(show);
    }
    let parent;
    if (parentId && !isNaN(+parentId)) {
      parent = await this.categoryRepository.findOneBy({ id: +parentId });
    }
    console.log({
      title,
      slug,
      show,
      parentId: parent?.id ? parent.Id : 0,
      image: Location,
    });

    const result = await this.categoryRepository.create({
      title,
      slug,
      show,
      parentId: parent?.id ? parent.Id : null,
      image: Location,
    });
    await this.categoryRepository.save(result)
    return {
      message: 'category created successfully',
      data: result,
    };
  }

  async findAll(paginationDto:PaginationDto) {
    const {limit,page,skip}= paginationSolver(paginationDto.page,paginationDto.limit)
    const [categories, count] = await this.categoryRepository.findAndCount({
      where: {},
      relations: {
        parent: true,
      },
      select: {
        parent: {
          title: true,
        },
      },
      skip,
      take:limit,
      order:{id:"DESC"}
    });
    return {
      pagination:paginationGenerator(count,page,limit),
      categories,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }
  async findOneBySlug(slug: string) {
    return await this.categoryRepository.findOneBy({ slug });
  }
  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
