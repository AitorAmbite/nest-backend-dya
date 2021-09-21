import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBudgetfurnitureDto } from 'src/budgetfurnitures/dto/create-budgetfurniture.dto';
import { Budgetfurniture } from 'src/budgetfurnitures/entities/budgetfurniture.entity';
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

  async create(createBudgetDto: CreateBudgetDto) {
    try {
      const budget = this.budgetRepository.create(createBudgetDto);
      return await this.budgetRepository.save(budget);
    } catch (error) {
      throw new HttpException(
        "Couldn't create" + error,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  findAll() {
    return this.budgetRepository.find({ relations: ['furniture'] });
  }

  findOne(id: number) {
    return this.budgetRepository.findOne(id);
  }

  update(id: number, updateBudgetDto: UpdateBudgetDto) {
    return `This action updates a #${id} budget`;
  }

  remove(id: number) {
    return this.budgetRepository.delete(id);
  }
}
