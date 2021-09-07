import { IsNotEmpty, IsOptional, Length } from 'class-validator';
export class CreateBudgetDto {
  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  bl_id: string;

  @IsOptional()
  @Length(9, 9)
  phone: number;
}
