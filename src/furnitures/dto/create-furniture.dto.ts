import { IsNumber,IsNotEmpty } from 'class-validator';

export class CreateFurnitureDto {
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
