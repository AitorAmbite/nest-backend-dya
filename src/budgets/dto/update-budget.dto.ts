import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional, Length } from 'class-validator';
import { CreateBudgetDto } from './create-budget.dto';

export class UpdateBudgetDto extends PartialType(CreateBudgetDto) {
  @IsNotEmpty()
  id: number;
  @IsNotEmpty()
  bl_id: string;
  @IsNotEmpty()
  address: string;
  @IsNotEmpty()
  price: number;
  @IsOptional()
  carriage:number;
  @IsOptional()
  extras:number;
  @IsOptional()
  @Length(9, 9)
  phone: number;
}
