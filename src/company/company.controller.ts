import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CompanyService } from './company.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Company } from './company.entity';
import { CreateCompanyDto } from './dto/CreateCompany.dto';

@ApiTags('company')
@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) {}
    @ApiOperation({ summary: 'Get all Companies' })
    @ApiResponse({
        status: 200,
        type: [Company],
        description: 'The list of Companies',
    })
    @Get('/')
    getCompanies(query: any) {
        return this.companyService.getAllCompanies(query);
    }
    @ApiOperation({ summary: 'create a new company' })
    @ApiResponse({
        status: 201,
        type: [Company],
        description: 'create a new company',
    })
    @Post('/')
    async createCompany(@Body() CreateCompanyDto: CreateCompanyDto) {
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
            const res = await this.companyService.createCompany(CreateCompanyDto);
            return res;
        } catch (error) {
            throw new Error('Company not created:' + error.message);
        }
    }
}
