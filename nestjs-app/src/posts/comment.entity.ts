// CommentEntity
import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/common/mysql/base.entity';
import { PostsEntity } from 'src/posts/posts.entity'; // Adjust the import path
import { UserEntity } from 'src/users/user.entity';

@Entity({
  name: 'comments',
})
export class CommentEntity extends BaseEntity {
  @Column()
  text: string;

  @Column('simple-array', { nullable: true })
  images: string[];

  @Column('simple-array', { nullable: true })
  videos: string[];

  @Column('simple-array', { nullable: true })
  likes: string[];

  @Column('simple-array', { nullable: true })
  disLikes: string[];

  @ManyToOne(() => PostsEntity, (post) => post.comments)
  post: PostsEntity;

  @ManyToOne(() => UserEntity, (user) => user.comments) // Correct the relationship
  user: UserEntity;
}
