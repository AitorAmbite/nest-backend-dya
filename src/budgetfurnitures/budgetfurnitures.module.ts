import { Module } from '@nestjs/common';
import { BudgetfurnituresService } from './budgetfurnitures.service';
import { BudgetfurnituresController } from './budgetfurnitures.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Budgetfurniture } from './entities/budgetfurniture.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Budgetfurniture])],
  exports: [TypeOrmModule],
  controllers: [BudgetfurnituresController],
  providers: [BudgetfurnituresService],
})
export class BudgetfurnituresModule {}
