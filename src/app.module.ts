import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FurnituresModule } from './furnitures/furnitures.module';
import { BudgetsModule } from './budgets/budgets.module';
import { BudgetfurnituresModule } from './budgetfurnitures/budgetfurnitures.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    FurnituresModule, 
    BudgetsModule, 
    BudgetfurnituresModule, 
    UsersModule,
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
