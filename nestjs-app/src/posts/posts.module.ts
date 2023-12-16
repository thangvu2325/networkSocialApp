import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsEntity } from './posts.entity';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { UsersModule } from 'src/users/users.module';
import { CommentEntity } from './comment.entity';
import { ImageEntity } from './image.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostsEntity, CommentEntity, ImageEntity]),
    UsersModule,
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
