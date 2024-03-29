import { IsEmail, IsNotEmpty } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  username: string;
  @IsEmail()
  email: string;
  // @IsNotEmpty()
  // role:string;
  @IsNotEmpty()
  password: string;
}
