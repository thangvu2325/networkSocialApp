import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { compare } from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { UserEntity } from 'src/users/user.entity';
import { LoginDto } from './Dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { RedisService } from 'src/redis/redis.service';
const EXPIRE_TIME = 20 * 1000;

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userService: UsersService,
    private jwtService: JwtService,
    private readonly redisTokenService: RedisService,
  ) {}
  async login(dto: LoginDto) {
    const user = await this.validateUser(dto);
    const payload = {
      username: user.email,
      sub: {
        name: user.nickName,
      },
    };
    const accessToken = await this.jwtService.signAsync(payload, {
      expiresIn: '20s',
      secret: process.env.jwtSecretKey,
    });

    const refreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: '7d',
      secret: process.env.jwtRefreshTokenKey,
    });

    // Lưu Refresh Token vào Redis
    await this.redisTokenService.saveRefreshToken(refreshToken);

    return {
      user,
      backendTokens: {
        accessToken,
        refreshToken,
        expiresIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME),
      },
    };
  }
  async validateUser(dto: LoginDto) {
    const user = await this.userService.findOne({
      where: {
        username: dto.username,
      },
    });

    if (user && (await compare(dto.password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException();
  }

  async refreshToken(user: any) {
    const payload = {
      username: user.username,
      sub: user.sub,
    };
    return {
      accessToken: await this.jwtService.signAsync(payload, {
        expiresIn: '20s',
        secret: process.env.jwtSecretKey,
      }),
      refreshToken: await this.jwtService.signAsync(payload, {
        expiresIn: '7d',
        secret: process.env.jwtRefreshTokenKey,
      }),
      expiresIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME),
    };
  }
}
