import { IsEmail, isNotEmpty, IsNotEmpty } from 'class-validator';

export class CreateBudgetfurnitureDto {
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
  fillingdrawer: number;
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  type: string;
}
