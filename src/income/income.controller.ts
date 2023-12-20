import {Controller, Get, Query} from "@nestjs/common";
import {IncomeService} from "./income.service";
import {ApiOperation,ApiResponse,ApiTags} from "@nestjs/swagger";
import {Income} from "./income.entity";

@ApiTags('Income')
@Controller('Income')
export class IncomeController{
    constructor(private readonly incomeService: IncomeService) {}
    @ApiOperation({ summary: 'Get all Income' })
    @ApiResponse({
        status: 200,
        type: [Income],
        description: 'The list of Income',
    })
    @Get('/')
    getIncome(query:any){
        return this.incomeService.getAllIncome(query)
    }
}