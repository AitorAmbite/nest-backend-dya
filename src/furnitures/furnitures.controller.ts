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
import { Furniture } from './entities/furniture.entity'
import { PaginationDTO,PaginationTypeDTO,PaginatedResponse } from '../types/PaginationTypes';

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
  
  @Get('/paginated/:page/:pageSize/:type')
  findPaginated(@Param('page') page:number,@Param('pageSize') pageSize:number, @Param('type') type:string){
    const furniture = this.furnituresService.findPaginated(page,pageSize,type);
    // const response = new PaginatedResponse<Furniture>(furniture.totalRecords,page,furniture.data)
    return {furniture:furniture,count:furniture,page:page,pageSize:pageSize}
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
