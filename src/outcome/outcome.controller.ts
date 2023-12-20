import {Controller, Get, Query} from "@nestjs/common";
import {OutcomeService} from "./outcome.service";
import {ApiOperation,ApiResponse,ApiTags} from "@nestjs/swagger";
import {Outcome} from "./outcome.entity";

@ApiTags('Outcome')
@Controller('Outcome')
export class OutcomeController {
    constructor(private readonly outcomeService: OutcomeService) {}
    @ApiOperation({ summary: 'Get all Outcome' })
    @ApiResponse({
        status: 200,
        type: [Outcome],
        description: 'The list of Outcome',
    })
    @Get('/')
    getOutcome(query:any){
        return this.outcomeService.getAllOutcome(query)
    }
}