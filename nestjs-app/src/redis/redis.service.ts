import { Injectable, Inject } from '@nestjs/common';
import { RedisClient } from './redis.provider';

@Injectable()
export class RedisService {
  constructor(@Inject('REDIS_CLIENT') private readonly client: RedisClient) {}

  async saveRefreshToken(token: string): Promise<void> {
    await this.client.set(token, 'valid', 'EX', 60 * 60 * 24 * 7); // Expires in 7 days
  }

  async isRefreshTokenValid(token: string): Promise<boolean> {
    const result = await this.client.get(token);
    return !!result;
  }
}
