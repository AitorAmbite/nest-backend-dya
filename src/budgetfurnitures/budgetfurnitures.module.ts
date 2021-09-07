import { Module } from '@nestjs/common';
import { BudgetfurnituresService } from './budgetfurnitures.service';
import { BudgetfurnituresController } from './budgetfurnitures.controller';

@Module({
  controllers: [BudgetfurnituresController],
  providers: [BudgetfurnituresService]
})
export class BudgetfurnituresModule {}
