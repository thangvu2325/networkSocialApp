import { Module } from '@nestjs/common';
import { StoreModule } from 'src/store/store.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsEntity } from './posts.entity';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { UsersModule } from 'src/users/users.module';
import { CommentEntity } from './comment.entity';

@Module({
  imports: [
    StoreModule,
    TypeOrmModule.forFeature([PostsEntity, CommentEntity]),
    UsersModule,
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
