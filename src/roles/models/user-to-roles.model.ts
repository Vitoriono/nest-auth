import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/models/users.model';
import { Roles } from './roles.model';

@Table({ tableName: 'user-roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Roles)
  @Column({
    type: DataType.INTEGER,
    unique: true,
    allowNull: false,
  })
  roleId: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: string;
}
