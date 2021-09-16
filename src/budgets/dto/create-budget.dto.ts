import { IsNotEmpty, IsOptional, Length } from 'class-validator';
export class CreateBudgetDto {
  @IsNotEmpty()
  bl_id: string;
  @IsNotEmpty()
  address: string;
  @IsNotEmpty()
  price: number;
  @IsOptional()
  carriage:number;
  @IsOptional()
  extras:number;
  @IsOptional()
  @Length(9, 9)
  phone: number;


}
