import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
@Controller('user')
export class UserController{
    @Get('/')
    findAll(@Req() request: Request): string {
        return 'This action returns all cats';
    }
}