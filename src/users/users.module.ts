import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
@Module({
  controllers: [UsersController,TypeOrmModule.forFeature([User])],
  providers: [UsersService]
})
export class UsersModule {}
