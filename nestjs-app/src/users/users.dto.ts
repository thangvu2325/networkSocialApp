import { Expose, Transform } from 'class-transformer';
import { BaseDto } from 'src/common/base.dto';

export class UsersDto extends BaseDto {
  @Expose()
  id: string;
  @Transform(({ obj }) => obj.firstName + ' ' + obj.lastName)
  @Expose()
  fullName: string;

  @Expose()
  nickName: string;

  firstName: string;

  lastName: string;

  @Expose()
  username: string;
  @Expose()
  email: string;

  password: string;

  @Expose()
  bio: string;
  @Expose()
  image: string;
  @Expose()
  isActive: boolean;
  @Expose()
  roles: string;
}
