import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { StoreModule } from './store/store.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserEntity } from './users/user.entity';
import { PostsEntity } from './posts/posts.entity';
import { PostsModule } from './posts/posts.module';
import { CommentEntity } from './posts/comment.entity';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          name: 'default',
          type: 'mysql',
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USER'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
          entities: [CommentEntity, PostsEntity, UserEntity],
          logger: 'advanced-console',
          logging: 'all',
          synchronize: true,
        };
      },
    }),
    UsersModule,
    PostsModule,
    StoreModule.forRoot(),
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
