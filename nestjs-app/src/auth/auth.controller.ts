import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  Delete,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { LoginDto } from './Dto/auth.dto';
import { UsersDto } from 'src/users/users.dto';
import { RefreshJwtGuard } from './guards/refresh.guard';
import { RedisService } from 'src/redis/redis.service';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UsersService,
    private authService: AuthService,
    private readonly redisService: RedisService,
  ) {}
  @Post('register')
  async registerUser(@Body() dto: UsersDto) {
    return await this.userService.save(dto);
  }
  @Post('login')
  async login(@Body() dto: LoginDto) {
    return await this.authService.login(dto);
  }

  @UseGuards(RefreshJwtGuard)
  @Post('refresh')
  async refreshToken(@Request() req) {
    console.log('refreshed');

    return await this.authService.refreshToken(req.user);
  }
  // Token
  @Get('getalltokens')
  async getAllToken() {
    return await this.redisService.getAllTokens();
  }

  @Delete('deletealltokens')
  async deleteAllToken(): Promise<{ result: string }> {
    return await this.redisService.deleteAllTokens();
  }
}
