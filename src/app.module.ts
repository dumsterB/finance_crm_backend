import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user/user.module';
import { IncomeModule } from './income/income.module';
import { OutcomeModule } from './outcome/outcome.module';
import { WarehouseModule } from './warehouse/warehouse.module';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [
    AuthModule,
    IncomeModule,
    UsersModule,
    OutcomeModule,
    WarehouseModule,
    CompanyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
