import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Roles } from './models/roles.model';
import { User } from 'src/users/models/users.model';
import { UserRoles } from './models/user-to-roles.model';

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [SequelizeModule.forFeature([Roles, User, UserRoles])],
  exports: [RolesService],
})
export class RolesModule {}
