import { Expose } from 'class-transformer';
import { BaseDto } from 'src/common/base.dto';
import { UsersDto } from 'src/users/users.dto';
import { CommentDto } from './comment.dto';
export class PostsDto extends BaseDto {
  @Expose()
  text: string;
  @Expose()
  images: Array<string>;
  @Expose()
  videos?: Array<string>;
  @Expose()
  likes: Array<string>;
  @Expose()
  disLikes: Array<string>;
  @Expose()
  shares: Array<string>;
  @Expose()
  comments: CommentDto[];
  @Expose()
  user: UsersDto;
}
