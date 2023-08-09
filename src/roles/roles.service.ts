import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Roles } from './models/roles.model';
import { CreateRoleDto } from './dtos/create-role.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Roles) private readonly rolesRepository: typeof Roles,
  ) {}
  async createRole(dto: CreateRoleDto) {
    const role = await this.rolesRepository.create(dto);
    return role;
  }
  async getRoleByValue(value: string) {
    const role = await this.rolesRepository.findOne({ where: { value } });
    return role;
  }
}
