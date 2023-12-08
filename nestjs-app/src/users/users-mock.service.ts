import { UsersDto } from './users.dto';
export class UsersMockService {
  createUser(user: UsersDto): UsersDto {
    return user;
  }
}
