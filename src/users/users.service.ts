import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    await this.userRepository.save(user);
    delete user.password;
    return user;
  }
  findAll() {
    return this.userRepository.find();
  }
  findOne(id: number) {
    return this.userRepository.find({ where: { id: id } });
  }
  findByMail(email: string) {
    return this.userRepository.find({ where: { email: email } });
  }
  findByUsername(username: string) {
    return this.userRepository.find({ where: { username: username } });
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
