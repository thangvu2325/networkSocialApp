import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { BaseEntity } from 'src/common/mysql/base.entity';
import { UserEntity } from 'src/users/user.entity';
import { CommentEntity } from './comment.entity';

@Entity({
  name: 'posts',
})
export class PostsEntity extends BaseEntity {
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

  @Column('simple-array', { nullable: true })
  shares: string[];

  @OneToMany(() => CommentEntity, (comment) => comment.post, { eager: true })
  @JoinColumn()
  comments: CommentEntity[];

  @ManyToOne(() => UserEntity, (user) => user.posts)
  user: UserEntity;
}
