import { Module } from '@nestjs/common';
import { BudgetsService } from './budgets.service';
import { BudgetsController } from './budgets.controller';
import { Budget } from './entities/budget.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Budget])],
  exports: [TypeOrmModule],
  controllers: [BudgetsController],
  providers: [BudgetsService],
})
export class BudgetsModule {}
