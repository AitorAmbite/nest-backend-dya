import { Module } from '@nestjs/common';
import { FurnituresService } from './furnitures.service';
import { FurnituresController } from './furnitures.controller';
import { Furniture } from './entities/furniture.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Module({
  imports: [TypeOrmModule.forFeature([Furniture])],
  exports: [TypeOrmModule],
  controllers: [FurnituresController],
  providers: [
    FurnituresService,
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
  ],
})
export class FurnituresModule {}
