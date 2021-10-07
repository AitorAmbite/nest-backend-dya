import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsNotEmpty()
  id: number;
  @IsNotEmpty()
  username: string;
  // role:string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
}
