import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/users.model';
import { RolesModule } from 'src/roles/roles.module';
import { Roles } from 'src/roles/models/roles.model';
import { UserRoles } from 'src/roles/models/user-to-roles.model';
import { AuthModule } from 'src/auth/auth.module';
import { Posts } from 'src/post/models/posts.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Roles, UserRoles, Posts]),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
  exports: [UsersService],
})
export class UsersModule {}
