import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BudgetfurnituresService } from './budgetfurnitures.service';
import { CreateBudgetfurnitureDto } from './dto/create-budgetfurniture.dto';
import { UpdateBudgetfurnitureDto } from './dto/update-budgetfurniture.dto';

@Controller('budgetfurnitures')
export class BudgetfurnituresController {
  constructor(
    private readonly budgetfurnituresService: BudgetfurnituresService,
  ) {}

  @Post()
  create(@Body() createBudgetfurnitureDto: CreateBudgetfurnitureDto) {
    return this.budgetfurnituresService.create(createBudgetfurnitureDto);
  }

  @Get('/all')
  findAll() {
    return this.budgetfurnituresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.budgetfurnituresService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBudgetfurnitureDto: UpdateBudgetfurnitureDto,
  ) {
    return this.budgetfurnituresService.update(+id, updateBudgetfurnitureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.budgetfurnituresService.remove(+id);
  }
}
