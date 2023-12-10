import { Expose } from 'class-transformer';
import { BaseDto } from 'src/common/base.dto';
import { UsersDto } from 'src/users/users.dto';
export class CommentDto extends BaseDto {
  @Expose()
  text: string;
  @Expose()
  images: string[];
  @Expose()
  videos: string[];
  @Expose()
  likes: string[];
  @Expose()
  disLikes: string[];
  @Expose()
  postId: string;
  @Expose()
  user: UsersDto;
}
