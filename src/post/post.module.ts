import { Module } from '@nestjs/common';
import { PostsController } from './post.controller';
import { PostsService } from './post.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Posts } from './models/posts.model';
import { User } from 'src/users/models/users.model';
import { FilesModule } from 'src/files/files.module';

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [SequelizeModule.forFeature([User, Posts]), FilesModule],
})
export class PostModule {}
