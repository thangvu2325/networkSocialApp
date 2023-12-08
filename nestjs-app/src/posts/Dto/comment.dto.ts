import { Expose } from 'class-transformer';
import { BaseDto } from 'src/common/base.dto';
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
  userId: string;
}
