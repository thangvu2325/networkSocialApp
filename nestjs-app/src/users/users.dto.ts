import { Expose, Transform } from 'class-transformer';
import { BaseDto } from 'src/common/base.dto';

export class UsersDto extends BaseDto {
  @Expose()
  id: string;
  @Transform(({ obj }) => obj.firstName + ' ' + obj.lastName)
  @Expose()
  fullName: string;
  @Expose()
  firstName: string;
  @Expose()
  lastName: string;
  @Expose()
  userName: string;
  @Expose()
  email: string;
  @Expose()
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
