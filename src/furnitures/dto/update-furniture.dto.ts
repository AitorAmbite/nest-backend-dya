import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsNotEmpty } from 'class-validator';
import { CreateFurnitureDto } from './create-furniture.dto';

export class UpdateFurnitureDto extends PartialType(CreateFurnitureDto) {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  high: number;
  @IsNotEmpty()
  width: number;
  @IsNotEmpty()
  back: number;
  @IsNotEmpty()
  drawer: number;
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  type: string;
}
