import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FurnituresModule } from './furnitures/furnitures.module';
import { BudgetsModule } from './budgets/budgets.module';
import { BudgetfurnituresModule } from './budgetfurnitures/budgetfurnitures.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    FurnituresModule,
    BudgetsModule,
    BudgetfurnituresModule,
    UsersModule,
    TypeOrmModule.forRoot(),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
