import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/user.entity';
import { PostsEntity } from './posts/posts.entity';
import { PostsModule } from './posts/posts.module';
import { CommentEntity } from './posts/comment.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('MYSQLDB_HOST'),
        port: configService.get('MYSQLDB_LOCAL_PORT'),
        username: configService.get('MYSQLDB_USER'),
        password: configService.get('MYSQLDB_PASSWORD'),
        database: configService.get('MYSQLDB_DATABASE'),
        entities: [CommentEntity, PostsEntity, UserEntity],
        synchronize: true,
      }),
    }),

    UsersModule,
    PostsModule,
    AuthModule,
    RedisModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: 'App_User',
      useClass: AppService,
    },
  ],
})
export class AppModule {}
