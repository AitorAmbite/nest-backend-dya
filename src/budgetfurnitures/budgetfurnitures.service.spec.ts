import { Test, TestingModule } from '@nestjs/testing';
import { BudgetfurnituresService } from './budgetfurnitures.service';

describe('BudgetfurnituresService', () => {
  let service: BudgetfurnituresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BudgetfurnituresService],
    }).compile();

    service = module.get<BudgetfurnituresService>(BudgetfurnituresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
