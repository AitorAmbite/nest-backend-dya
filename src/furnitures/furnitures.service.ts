import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginationDTO } from '../types/PaginationTypes';
import { CreateFurnitureDto } from './dto/create-furniture.dto';
import { UpdateFurnitureDto } from './dto/update-furniture.dto';
import { Furniture } from './entities/furniture.entity';

@Injectable()
export class FurnituresService {
  constructor(
    @InjectRepository(Furniture)
    private furnitureRepository: Repository<Furniture>,
  ) {}
  async create(createFurnitureDto: CreateFurnitureDto) {
    const furniture = await this.furnitureRepository.save(createFurnitureDto);
    if (furniture) {
      return furniture;
    }
    throw new HttpException("couldn't create", HttpStatus.INTERNAL_SERVER_ERROR);
  }
  async findAll() {
    const furniture = await this.furnitureRepository.find();
    if (furniture.length > 0) {
      return furniture;
    }
    throw new HttpException("couldn't find NOTHING", HttpStatus.NOT_FOUND);
  }

  async findOne(id: number) {
    const furniture = await this.furnitureRepository.findOne(id);
    if (furniture) {
      return furniture;
    }
    throw new HttpException("couldn't find furniture with id `${id}`", HttpStatus.NOT_FOUND);
  }

  async findPaginated (pagination:PaginationDTO) {
    const skip = pagination.page*pagination.pageSize;
    return this.furnitureRepository.find({skip:this.skip,take:pagination.pageSize})
  }

  async findByTypePaginated (pagination:PaginationTypeDTO){
    const skip = pagination.page*pagination.pageSize;
    return await this.furnitureRepository.find({
      skip:this.skip,
      take:pagination.pageSize,
      where:{type:pagination.type}
    })
  }

  async update(id: number, updateFurnitureDto: UpdateFurnitureDto) {
    const furniture = await this.furnitureRepository.update(
      id,
      updateFurnitureDto,
    );
    if (furniture.affected) {
      return furniture;
    }
    throw new HttpException(
      "couldn't update",
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  async remove(id: number) {
    const furniture = await this.furnitureRepository.delete(id);
    if (furniture.affected) {
      return '';
    }
    throw new HttpException(
      "couldn't update",
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
