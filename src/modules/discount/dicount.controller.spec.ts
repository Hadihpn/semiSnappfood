import { Test, TestingModule } from '@nestjs/testing';
import { DiscountController } from './dicount.controller';
import { DiscountService } from './dicount.service';

describe('DiscountController', () => {
  let controller: DiscountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiscountController],
      providers: [DiscountService],
    }).compile();

    controller = module.get<DiscountController>(DiscountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
