import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersDto } from './users.dto';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { MysqlBaseService } from 'src/common/mysql/base.service';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UsersService extends MysqlBaseService<UserEntity, UsersDto> {
  constructor(
    // @Inject('STORE_SERVICEuser.json') private storeService: StoreService,
    @InjectRepository(UserEntity)
    private readonly userReposity: Repository<UserEntity>,
  ) {
    super(userReposity, UsersDto);
  }
  async findAll(
    query,
  ): Promise<{ users: Array<UsersDto>; usersCount: number }> {
    const qb = await this.userReposity.createQueryBuilder('users');

    qb.where('1 = 1');

    qb.orderBy('users.createdAt', 'DESC'); // Corrected the alias to 'posts'

    const usersCount = await qb.getCount();

    if ('limit' in query) {
      qb.limit(query.limit);
    }

    if ('offset' in query) {
      qb.offset(query.offset);
    }

    const users = await qb.getMany();

    const usersDtoArray = users.map((user) =>
      plainToClass(UsersDto, user, { excludeExtraneousValues: true }),
    );

    return { users: usersDtoArray, usersCount };
  }
}
