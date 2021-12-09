import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional, Length } from 'class-validator';
import { CreateBudgetDto } from './create-budget.dto';

export class UpdateBudgetDto extends PartialType(CreateBudgetDto){
}
