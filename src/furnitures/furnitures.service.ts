import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFurnitureDto } from './dto/create-furniture.dto';
import { UpdateFurnitureDto } from './dto/update-furniture.dto';
import { Furniture } from './entities/furniture.entity';

@Injectable()
export class FurnituresService {
  constructor(
    @InjectRepository(Furniture)
    private furnitureRepository: Repository<Furniture>,
  ) {}
  create(createFurnitureDto: CreateFurnitureDto) {
    const furniture = this.furnitureRepository.create(createFurnitureDto);
    this.furnitureRepository.save(furniture);
    return `${furniture.name} añadido con exito`;
  }

  findAll() {
    return this.furnitureRepository.find();
  }

  findOne(id: number) {
    return this.furnitureRepository.findOne(id);
  }

  update(id: number, updateFurnitureDto: UpdateFurnitureDto) {
    const furnitureToUpdate =
      this.furnitureRepository.create(updateFurnitureDto);
    this.furnitureRepository.save(furnitureToUpdate);
    return `mueble con id:${id} actualizado con exito`;
  }

  async remove(id: number) {
    const furnitureToRemove = await this.furnitureRepository.findOne(id);
    await this.furnitureRepository.remove(furnitureToRemove);
    return `mueble con id:${id} eliminado`;
  }
}
