import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { Budget } from './entities/budget.entity';

@Injectable()
export class BudgetsService {
  constructor(
    @InjectRepository(Budget)
    private budgetRepository: Repository<Budget>,
  ) {}

  create(createBudgetDto: CreateBudgetDto) {
    return this.budgetRepository.create(createBudgetDto);
  }

  findAll() {
    return this.budgetRepository.find();
  }

  findOne(id: number) {
    return this.budgetRepository.find({ where: { id: id } });
  }

  update(id: number, updateBudgetDto: UpdateBudgetDto) {
    return `This action updates a #${id} budget`;
  }

  remove(id: number) {
    return this.budgetRepository.delete(id);
  }
}
