import { Module } from '@nestjs/common';
import { BudgetsService } from './budgets.service';
import { BudgetsController } from './budgets.controller';
import { Budget } from './entities/budget.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Budgetfurniture } from 'src/budgetfurnitures/entities/budgetfurniture.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Budget, Budgetfurniture])],
  exports: [TypeOrmModule],
  controllers: [BudgetsController],
  providers: [BudgetsService],
})
export class BudgetsModule {}
