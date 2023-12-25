import { Controller, Get, Post, Req, Query, Body,Delete,Param } from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UserService } from './user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FindUserDto } from './dto/FindUser.dto';
import {User} from "./user.entity";

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    status: 200,
    type: [User],
    description: 'The list of users',
  })
  @Get('/')
  findAllUser(@Query() query: any) {
    return this.userService.getUsers(query);
  }
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({
    status: 200,
    type: [User],
    description: 'The user created',
  })
  @Post('/')
  async createUser(@Body() createUserDto: CreateUserDto) {
    try {
      const res = await this.userService.createUser(createUserDto);
      return res;
    } catch (error) {
      throw new Error('User not created:' + error.message);
    }
  }
  @ApiOperation({ summary: 'Delete a user' })
  @ApiResponse({ status: 204, description: 'The user deleted' })
  // @ApiBearerAuth()
  // @Roles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUserById(id);
  }
}
