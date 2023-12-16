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
  async getAllTokens(): Promise<string[]> {
    const keys = await this.client.keys('*'); // Get all keys (tokens) in Redis

    // Filter out null values (expired or non-existing tokens)
    const validTokens = keys.filter((token) => token !== null);

    return validTokens as string[];
  }
  async deleteAllTokens(): Promise<{ result: string }> {
    const keys = await this.client.keys('*');

    if (keys.length === 0) {
      return;
    }

    // Delete all keys (tokens)
    await this.client.del(...keys);
    return { result: 'Đã xóa tất cả Token' };
  }
}
