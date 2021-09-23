import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    try {
      const user = this.userRepository.create(createUserDto);
      await this.userRepository.save(user);
      const { password, ...result } = user;
      return result;
    } catch (error) {
      throw new HttpException(
        'unexpected error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async findAll() {
    const users = await this.userRepository.find();
    if (users.length > 0) {
      return users;
    }
    throw new HttpException(
      'unexpected error',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
  async findOne(id: number) {
    const user = await this.userRepository.findOne(id);
    if (user) {
      return user;
    }
    throw new HttpException("couldn't find", HttpStatus.NOT_FOUND);
  }
  async findByMail(emailTest: string) {
    console.log(emailTest);
    const user = await this.userRepository.findOne({
      where: { email: emailTest },
    });
    if (user) {
      return user;
    }
    throw new HttpException("couldn't find", HttpStatus.NOT_FOUND);
  }
  async findByUsername(username: string) {
    const user = await this.userRepository.findOne({
      where: { username: username },
    });
    if (user) {
      return user;
    }
    throw new HttpException("couldn't find", HttpStatus.NOT_FOUND);
  }
  async update(id: number, updateUserDto: UpdateUserDto) {
    const updated = await this.userRepository.update(id, updateUserDto);
    if (updated.affected) {
      return '';
    }
    throw new HttpException("couldn't find", HttpStatus.NOT_FOUND);
  }
  async remove(id: number) {
    const deleted = await this.userRepository.delete(id);
    if (deleted.affected) {
      return '';
    }
    throw new HttpException("couldn't find and delete", HttpStatus.NOT_FOUND);
  }
}
