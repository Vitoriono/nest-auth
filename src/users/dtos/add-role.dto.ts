import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @IsString({ message: 'Should be string value' })
  readonly value: string;

  @IsNumber({}, { message: 'Should be number value' })
  readonly userId: number;
}
