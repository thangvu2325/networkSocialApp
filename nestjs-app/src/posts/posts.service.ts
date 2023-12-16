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
import { ImageEntity } from './image.entity';
import { ImageDto } from './Dto/image.dto';

@Injectable()
export class PostsService extends MysqlBaseService<PostsEntity, PostsDto> {
  constructor(
    @InjectRepository(PostsEntity)
    private readonly postRepository: Repository<PostsEntity>,
    private readonly usersService: UsersService,
    @InjectRepository(CommentEntity)
    private readonly commentRepository: Repository<CommentEntity>,
    @InjectRepository(ImageEntity)
    private readonly imageRepository: Repository<ImageEntity>,
  ) {
    super(postRepository, PostsDto);
  }
  async findAll(
    query,
  ): Promise<{ posts: Array<PostsDto>; postsCount: number }> {
    const qb = await this.postRepository
      .createQueryBuilder('posts')
      .leftJoinAndSelect('posts.user', 'user')
      .leftJoinAndSelect('posts.comments', 'comments')
      .leftJoinAndSelect('posts.images', 'images');

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
      const transformedComment = plainToInstance(CommentDto, post.comments, {
        excludeExtraneousValues: true,
      });
      const transformedImage = plainToInstance(ImageDto, post.images, {
        excludeExtraneousValues: true,
      });
      return plainToInstance(
        PostsDto,
        {
          ...post,
          user: transformedUser,
          comments: transformedComment,
          images: transformedImage,
        },
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
      throw new Error('User not found');
    }

    const images = post.images.map((image) => {
      const imageData: ImageEntity = this.imageRepository.create(image);
      return imageData;
    });

    await this.imageRepository.save(images);

    const newPost = this.postRepository.create({
      ...post,
      user,
      images,
    });

    await this.postRepository.save(newPost);

    return plainToInstance(PostsDto, newPost, {
      excludeExtraneousValues: true,
    });
  }
  // Commemnt
  async findComments(postId): Promise<CommentDto[]> {
    const post = await this.postRepository
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.comments', 'comment')
      .leftJoinAndSelect('comment.user', 'user')
      .where('post.id = :postId', { postId })
      .getOne();

    if (!post) {
      throw new Error(`Post with ID ${postId} not found.`);
    }

    const commentArray = post.comments.map((comment) => {
      const transformedUser = plainToClass(UsersDto, comment.user, {
        excludeExtraneousValues: true,
      });

      return plainToInstance(
        CommentDto,
        { ...comment, user: transformedUser, postId: post.id },
        {
          excludeExtraneousValues: true,
        },
      );
    });

    return commentArray;
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
        id: commentData.user.id,
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
        id: commentData.user.id,
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
