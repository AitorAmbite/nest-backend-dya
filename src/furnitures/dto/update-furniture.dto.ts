import { PartialType } from '@nestjs/mapped-types';
import { IsNumber ,IsNotEmpty } from 'class-validator';
import { CreateFurnitureDto } from './create-furniture.dto';

export class UpdateFurnitureDto extends PartialType(CreateFurnitureDto) {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @IsNumber()
  high: number;
  @IsNotEmpty()
  @IsNumber()
  width: number;
  @IsNotEmpty()
  @IsNumber()
  back: number;
  @IsNotEmpty()
  @IsNumber()
  drawer: number;
  @IsNotEmpty()
  @IsNumber()
  price: number;
  @IsNotEmpty()
  type: string;
}
