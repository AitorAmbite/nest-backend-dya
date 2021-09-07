import { Module } from '@nestjs/common';
import { FurnituresService } from './furnitures.service';
import { FurnituresController } from './furnitures.controller';
import { Furniture } from './entities/furniture.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Furniture])],
  exports: [TypeOrmModule],
  controllers: [FurnituresController],
  providers: [FurnituresService],
})
export class FurnituresModule {}
