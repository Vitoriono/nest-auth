import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'examp.new@gmail.com', description: 'Unique email' })
  readonly email: string;

  @ApiProperty({ example: '3276190', description: 'password' })
  readonly password: string;
}
