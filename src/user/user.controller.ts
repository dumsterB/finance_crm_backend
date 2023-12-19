import { Controller, Get,Post, Req, Query,Body } from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UserService } from './user.service';
import { Request } from 'express';
@Controller('user')
export class UserController{
    constructor(private readonly userService: UserService) {}
    @Get('/')
    findAllUser(@Query() query: any) {
        return this.userService.getUsers(query);
    }
    @Post('/')
    async createUser(@Body() createUserDto: CreateUserDto) {
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
            const res = await this.userService.createUser(createUserDto);
            return res;
        } catch (error) {
            throw new Error('User not created:' + error.message);
        }
    }
}