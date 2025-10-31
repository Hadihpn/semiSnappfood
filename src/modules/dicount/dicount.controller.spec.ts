import { Test, TestingModule } from '@nestjs/testing';
import { DicountController } from './dicount.controller';
import { DicountService } from './dicount.service';

describe('DicountController', () => {
  let controller: DicountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DicountController],
      providers: [DicountService],
    }).compile();

    controller = module.get<DicountController>(DicountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
