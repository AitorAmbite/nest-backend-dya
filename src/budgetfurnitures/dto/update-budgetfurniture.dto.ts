import { PartialType } from '@nestjs/mapped-types';
import { CreateBudgetfurnitureDto } from './create-budgetfurniture.dto';

export class UpdateBudgetfurnitureDto extends PartialType(
  CreateBudgetfurnitureDto,
) {}
