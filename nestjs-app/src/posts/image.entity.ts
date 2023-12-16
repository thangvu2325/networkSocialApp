// CommentEntity
import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/common/mysql/base.entity';
import { PostsEntity } from './posts.entity';
@Entity({
  name: 'image',
})
export class ImageEntity extends BaseEntity {
  @Column()
  src: string;
  @ManyToOne(() => PostsEntity, (post) => post.images)
  post: PostsEntity;
}
