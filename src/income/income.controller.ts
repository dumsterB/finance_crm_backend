import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { IncomeService } from './income.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Income } from './income.entity';
import { CreateIncomeDto } from './dto/CreateIncome.dto';

@ApiTags('income')
@Controller('income')
export class IncomeController {
  constructor(private readonly incomeService: IncomeService) {}
  @ApiOperation({ summary: 'Get all Income' })
  @ApiResponse({
    status: 200,
    type: [Income],
    description: 'The list of Income',
  })
  @Get('/')
  getIncome(query: any) {
    return this.incomeService.getAllIncome(query);
  }
  @ApiOperation({ summary: 'create a new income' })
  @ApiResponse({
    status: 201,
    type: [Income],
    description: 'create a new income',
  })
  @Post('/')
  async createUser(@Body() CreateIncomeDto: CreateIncomeDto) {
    try {
      // if (!createUserDto.email && !createUserDto.phone_number) {
      //   throw new BadRequestException('Email or phone number is required');
      // }
      // //  check if user exists by email or phone number
      // const user = await this.userService.getUserByEmailOrPhone(
      //   createUserDto.email,
      //   createUserDto.phone_number,
      // );
      // if (user) throw new BadRequestException('User already exists');
      const res = await this.incomeService.createIncome(CreateIncomeDto);
      return res;
    } catch (error) {
      throw new Error('User not created:' + error.message);
    }
  }
}
