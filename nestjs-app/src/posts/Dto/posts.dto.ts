import { Expose } from 'class-transformer';
import { BaseDto } from 'src/common/base.dto';
import { UsersDto } from 'src/users/users.dto';
import { CommentDto } from './comment.dto';
import { ImageDto } from './image.dto';
export class PostsDto extends BaseDto {
  @Expose()
  text: string;
  @Expose()
  images: Array<ImageDto>;
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
