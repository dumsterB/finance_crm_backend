import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { BranchService } from './branch.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Branch } from './branch.entity';
import { CreateBranchDto } from './dto/CreateBranch.dto';

@ApiTags('branch')
@Controller('branch')
export class BranchController {
    constructor(private readonly branchService: BranchService) {}
    @ApiOperation({ summary: 'Get all Branches' })
    @ApiResponse({
        status: 200,
        type: [Branch],
        description: 'The list of Branches',
    })
    @Get('/')
    getBranches(query: any) {
        return this.branchService.getAllBranches(query);
    }
    @ApiOperation({ summary: 'create a new branch' })
    @ApiResponse({
        status: 201,
        type: [Branch],
        description: 'create a new branch',
    })
    @Post('/')
    async createBranch(@Body() CreateBranchDto: CreateBranchDto) {
        try {
            const res = await this.branchService.createBranch(CreateBranchDto);
            return res;
        } catch (error) {
            throw new Error('Branch not created:' + error.message);
        }
    }
}
