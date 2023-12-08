import {
  Controller,
  Get,
  Param,
  Delete,
  Put,
  Post,
  Body,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsDto } from './Dto/posts.dto';
import { CommentDto } from './Dto/comment.dto';
import { plainToInstance } from 'class-transformer';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getAllPost() {
    return this.postsService.findAll({});
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PostsDto> {
    const postFounded = await this.postsService.findOne({
      where: {
        id: id as string,
      },
    });
    const transformedComment = plainToInstance(
      CommentDto,
      postFounded.comments,
      { excludeExtraneousValues: true },
    );
    return plainToInstance(
      PostsDto,
      { ...postFounded, comments: transformedComment },
      {
        excludeExtraneousValues: true,
      },
    );
  }

  @Post(':userId')
  CreatePostForUser(
    @Body() post: PostsDto,
    @Param('userId') userId: string,
  ): Promise<PostsDto> {
    return this.postsService.savePostforUser(post, userId);
  }
  @Delete(':id')
  deleteUser(@Param() id: string): Promise<{ result: string }> {
    return this.postsService.deleteById(id);
  }

  // Comment
  @Get(':id/comments')
  async findComments(@Param('id') id: string): Promise<CommentDto[]> {
    return await this.postsService.findComments(id);
  }
  @Post(':id/comments')
  async createComment(
    @Body() comment: CommentDto,
    @Param('id') id: string,
  ): Promise<CommentDto[]> {
    return await this.postsService.addComment(id, comment);
  }
  @Put(':id/comments/:commentId')
  async updateComment(
    @Body() comment: CommentDto,
    @Param('id') id: string,
    @Param('commentId') commentId: string,
  ): Promise<CommentDto> {
    return await this.postsService.updateComment(id, commentId, comment);
  }
}
