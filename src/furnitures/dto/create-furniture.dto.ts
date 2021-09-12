import { IsNotEmpty } from 'class-validator';

export class CreateFurnitureDto {
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
