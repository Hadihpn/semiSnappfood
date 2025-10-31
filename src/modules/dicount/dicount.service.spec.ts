import { Test, TestingModule } from '@nestjs/testing';
import { DicountService } from './dicount.service';

describe('DicountService', () => {
  let service: DicountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DicountService],
    }).compile();

    service = module.get<DicountService>(DicountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
