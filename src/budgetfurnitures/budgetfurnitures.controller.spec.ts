import { Test, TestingModule } from '@nestjs/testing';
import { BudgetfurnituresController } from './budgetfurnitures.controller';
import { BudgetfurnituresService } from './budgetfurnitures.service';

describe('BudgetfurnituresController', () => {
  let controller: BudgetfurnituresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BudgetfurnituresController],
      providers: [BudgetfurnituresService],
    }).compile();

    controller = module.get<BudgetfurnituresController>(BudgetfurnituresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
