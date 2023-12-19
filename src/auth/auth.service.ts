import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { HashService } from '../user/hash.service';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { ReqData } from './auth.type';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private hashService: HashService,
    private jwtService: JwtService,
  ) {}
  async generateToken(user: ReqData['user']) {
    // Generate JWT token here
    const userData: ReqData['user'] = {
      id: user.id,
      fullName: user.fullName,
    };
    const access_token = await this.jwtService.signAsync(userData, {
      expiresIn: '1h',
    });
    const refresh_token = await this.jwtService.signAsync(userData, {
      expiresIn: '1d',
    });
    return {
      access_token,
      refresh_token,
      data: userData,
    };
  }
  validateToken(token: string) {
    try {
      return this.jwtService.verify(token);
    } catch (error) {
      throw new BadRequestException('Invalid token');
    }
  }
  getUserFromToken(token: string) {
    try {
      return this.jwtService.decode(token);
    } catch (error) {
      throw new BadRequestException('Invalid token');
    }
  }
}
