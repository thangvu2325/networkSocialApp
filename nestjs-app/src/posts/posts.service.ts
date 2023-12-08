import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MysqlBaseService } from 'src/common/mysql/base.service';
import { PostsDto } from './Dto/posts.dto';
import { PostsEntity } from './posts.entity';
import { plainToClass, plainToInstance } from 'class-transformer';
import { UsersService } from 'src/users/users.service';
import { CommentDto } from './Dto/comment.dto';
import { CommentEntity } from './comment.entity';
import { UsersDto } from 'src/users/users.dto';

@Injectable()
export class PostsService extends MysqlBaseService<PostsEntity, PostsDto> {
  constructor(
    @InjectRepository(PostsEntity)
    private readonly postRepository: Repository<PostsEntity>,
    private readonly usersService: UsersService,
    @InjectRepository(CommentEntity)
    private readonly commentRepository: Repository<CommentEntity>,
  ) {
    super(postRepository, PostsDto);
  }
  async findAll(
    query,
  ): Promise<{ posts: Array<PostsDto>; postsCount: number }> {
    const qb = await this.postRepository
      .createQueryBuilder('posts')
      .leftJoinAndSelect('posts.user', 'user')
      .leftJoinAndSelect('posts.comments', 'comment');

    qb.where('1 = 1');

    qb.orderBy('posts.createdAt', 'DESC'); // Corrected the alias to 'posts'

    const postsCount = await qb.getCount();

    if ('limit' in query) {
      qb.limit(query.limit);
    }

    if ('offset' in query) {
      qb.offset(query.offset);
    }

    const posts = await qb.getMany();
    const postsDtoArray = posts.map((post) => {
      const transformedUser = plainToClass(UsersDto, post.user, {
        excludeExtraneousValues: true,
      });
      const transformedComment = plainToClass(UsersDto, post.comments, {
        excludeExtraneousValues: true,
      });
      return plainToInstance(
        PostsDto,
        { ...post, user: transformedUser, comments: transformedComment },
        { excludeExtraneousValues: true },
      );
    });
    return { posts: postsDtoArray, postsCount };
  }

  async savePostforUser(post: PostsDto, userId: string): Promise<PostsDto> {
    const user = await this.usersService.findOne({
      where: {
        id: userId,
      },
    });
    if (!user) {
      throw new Error('User not found'); // Handle this according to your application's logic
    }

    const newPost = this.postRepository.create({
      ...post,
      user,
      comments: [],
    });

    await this.postRepository.save(newPost); // Use the correct repository

    return plainToInstance(PostsDto, newPost, {
      excludeExtraneousValues: true,
    });
  }
  // Commemnt
  async findComments(postId): Promise<CommentDto[]> {
    const post = await this.postRepository.findOne({
      where: {
        id: postId,
      },
    });
    return plainToInstance(CommentDto, post.comments, {
      excludeExtraneousValues: true,
    });
  }
  async addComment(
    postId: string,
    commentData: CommentDto,
  ): Promise<CommentDto[]> {
    const post = await this.postRepository.findOne({
      where: {
        id: postId,
      },
    });
    const user = await this.usersService.findOne({
      where: {
        id: commentData.userId,
      },
    });

    if (!post) {
      throw new Error('Post not found'); // Handle this according to your application's logic
    }

    if (!user) {
      throw new Error('User not found'); // Handle this according to your application's logic
    }

    let comment = new CommentEntity();

    comment = { ...commentData, post, user };

    this.commentRepository.save(comment);
    return plainToInstance(CommentDto, post.comments, {
      excludeExtraneousValues: true,
    });
  }
  async updateComment(
    postId: string,
    commentId: string,
    commentData: CommentDto,
  ): Promise<CommentDto> {
    const post = await this.postRepository.findOne({
      where: {
        id: postId,
      },
    });
    const user = await this.usersService.findOne({
      where: {
        id: commentData.userId,
      },
    });

    if (!post) {
      throw new Error('Post not found'); // Handle this according to your application's logic
    }

    if (!user) {
      throw new Error('User not found'); // Handle this according to your application's logic
    }
    const commentFounded = this.commentRepository.findOne({
      where: {
        id: commentId,
      },
    });
    await this.commentRepository.update(commentId, commentData);

    return plainToInstance(CommentDto, commentFounded, {
      excludeExtraneousValues: true,
    });
  }
}
