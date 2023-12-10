import { Entity, Column, OneToMany, BeforeInsert } from 'typeorm';
import { BaseEntity } from 'src/common/mysql/base.entity';
import { PostsEntity } from 'src/posts/posts.entity';
import { CommentEntity } from 'src/posts/comment.entity';
import { IsEmail } from 'class-validator';
import * as bcrypt from 'bcrypt';

@Entity({
  name: 'user',
})
export class UserEntity extends BaseEntity {
  @Column({ length: 50, default: null })
  firstName: string;
  @Column({ length: 50, default: null })
  lastName: string;
  @Column({ unique: true })
  username: string;
  @Column()
  nickName: string;
  @Column({ default: null, unique: true })
  @IsEmail()
  email: string;
  @Column()
  password: string;

  @Column({ default: '' })
  bio: string;
  @Column({ default: '' })
  image: string;
  @Column({ default: false })
  isActive: boolean;

  @Column({
    type: 'enum',
    enum: ['admin', 'group', 'user'],
    default: 'user',
  })
  roles: string;

  @OneToMany(() => PostsEntity, (post) => post.user, { cascade: true })
  posts: PostsEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.user, { cascade: true })
  comments: CommentEntity[];

  @BeforeInsert()
  async hashPassword() {
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
  }
}
