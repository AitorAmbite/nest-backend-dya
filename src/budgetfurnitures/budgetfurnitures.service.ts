import { Injectable } from '@nestjs/common';
import { CreateBudgetfurnitureDto } from './dto/create-budgetfurniture.dto';
import { UpdateBudgetfurnitureDto } from './dto/update-budgetfurniture.dto';

@Injectable()
export class BudgetfurnituresService {
  create(createBudgetfurnitureDto: CreateBudgetfurnitureDto) {
    return 'This action adds a new budgetfurniture';
  }

  findAll() {
    return `This action returns all budgetfurnitures`;
  }

  findOne(id: number) {
    return `This action returns a #${id} budgetfurniture`;
  }

  update(id: number, updateBudgetfurnitureDto: UpdateBudgetfurnitureDto) {
    return `This action updates a #${id} budgetfurniture`;
  }

  remove(id: number) {
    return `This action removes a #${id} budgetfurniture`;
  }
}
