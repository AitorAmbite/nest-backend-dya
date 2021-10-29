import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { FurnituresService } from './furnitures.service';
import { CreateFurnitureDto } from './dto/create-furniture.dto';
import { UpdateFurnitureDto } from './dto/update-furniture.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PaginationDTO,PaginationTypeDTO } from '../types/PaginationTypes';

@Controller('furnitures')
@UseGuards(JwtAuthGuard)
export class FurnituresController {
  constructor(private readonly furnituresService: FurnituresService) {}

  @Post()
  create(@Body() createFurnitureDto: CreateFurnitureDto) {
    return this.furnituresService.create(createFurnitureDto);
  }

  @Get('/all')
  findAll() {
    return this.furnituresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.furnituresService.findOne(+id);
  }
  
  @Post('/paginated')
  findPaginated(@Body() pagination:PaginationTypeDTO){
    return this.furnituresService.findPaginated(pagination)
  }

  findByTypePaginated(@Body pagination:PaginationDTO){
    return this.furnituresService.findByType(pagination)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFurnitureDto: UpdateFurnitureDto,
  ) {
    return this.furnituresService.update(+id, updateFurnitureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.furnituresService.remove(+id);
  }
}
