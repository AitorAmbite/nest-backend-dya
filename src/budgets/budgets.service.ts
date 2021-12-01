import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBudgetfurnitureDto } from 'src/budgetfurnitures/dto/create-budgetfurniture.dto';
import { Budgetfurniture } from 'src/budgetfurnitures/entities/budgetfurniture.entity';
import { Repository } from 'typeorm';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { Budget } from './entities/budget.entity';
// import { paginationT } from '../types/PaginationTypes';
// TEMPORAL TYPE
@Injectable()
export class BudgetsService {
  constructor(
    @InjectRepository(Budget)
    private budgetRepository: Repository<Budget>,
  ) {}

  async create(createBudgetDto: CreateBudgetDto) {
    try {
      createBudgetDto.price = this.getFinalPrice(createBudgetDto.furniture);
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
  async findAllNoFurniture(){
    return this.budgetRepository.find();
  }
  async findOne(id: number) {
    const budget = await this.budgetRepository.findOne(id);
    if(budget)
      return budget;

      throw new HttpException("couldn't find budget with id `${id}`", HttpStatus.NOT_FOUND);
  }
  async update(id: number, updateBudgetDto: UpdateBudgetDto) {
    const budgetUpdate = await this.budgetRepository.update(id,updateBudgetDto)
    if(budgetUpdate.affected){
      return '';
    }
    throw new HttpException("couldn't find", HttpStatus.NOT_FOUND);
  }

  remove(id: number) {
    return this.budgetRepository.delete(id);
  }

  //Helpers
  private getFinalPrice(budgetFurniture:CreateBudgetfurnitureDto[]){
    return budgetFurniture.reduce((acc,cur) => acc+cur.price,0);
  }

  //unsued - de momento
  // async findPaginated(pagination:paginationT) {
  //   const skip = pagination.page*pagination.pageSize;
  //   return await this.budgetRepository.find({skip:skip,take:pagination.pageSize})
  // }
}
